import {
  CoreNodeEventType,
  cvToValue,
  projectFactory
} from "@clarigen/core";
import { filterEvents, txOk } from "@clarigen/test";
import { tx } from "@hirosystems/clarinet-sdk";
import {
  boolCV,
  noneCV,
  principalCV,
  trueCV,
  uintCV
} from "@stacks/transactions";
import { describe, expect, test } from "vitest";
import {
  accounts,
  deployments,
  project,
} from "../../clarigen/src/clarigen-types";

const { smartWalletEndpoint } = projectFactory(project, "simnet");

const transferAmount = 100;

const alice = accounts.deployer.address;
const bob = accounts.wallet_1.address;

const smartWallet = deployments.smartWalletStandard.simnet;
const transferExtension = deployments.extSponsoredSbtcTransfer.simnet;

describe("Standard wallet with sponsored sbtc transfer extension", () => {
  test("that user can delegate and pool admin can lock", async () => {
    // add some sbtc to smart wallet
    const stxTransfer = tx.callPublicFn(
      "SM3VDXK3WZZSA84XXFKAFAF15NNZX32CTSG82JFQ4.sbtc-token",
      "transfer",
      [
        uintCV(transferAmount),
        principalCV(alice),
        principalCV(smartWallet),
        noneCV(),
      ],
      alice
    );
    const block = simnet.mineBlock([stxTransfer]);
    expect(block[0].result).toBeOk(trueCV());

    // transfer sbtc from smart wallet to bob
    const response = txOk(
      smartWalletEndpoint.sbtcTransferSponsored(smartWallet, {
        amount: transferAmount,
        to: bob,
        fees: 0,
      }),
      alice
    );

    expect(response.result).toBeOk(boolCV(true));

    // check for print event
    const printEvents = filterEvents(
      response.events,
      CoreNodeEventType.ContractEvent
    );
    expect(printEvents.length).toEqual(1);
    const [print] = printEvents;
    const printData = cvToValue<{
      a: string;
      payload: { extension: string };
    }>(print.data.value);
    expect(printData.a).toEqual("extension-call");
    expect(printData.payload.extension).toEqual(transferExtension);

    // extension call token event
    const ectEvents = filterEvents(
      response.events,
      CoreNodeEventType.FtBurnEvent
    );
    expect(ectEvents.length).toEqual(1);

    const [ectEvent] = ectEvents;
    expect(ectEvent.data.amount).toEqual("1");

    // check ft transfer event from smart wallet to extension
    const ftEvents = filterEvents(
      response.events,
      CoreNodeEventType.FtTransferEvent
    );
    const [sbtcEvent] = ftEvents;
    expect(sbtcEvent.data.amount).toEqual(transferAmount.toString());

    expect(sbtcEvent.data.sender).toEqual(smartWallet);
    expect(sbtcEvent.data.recipient).toEqual(bob);
  });
});
