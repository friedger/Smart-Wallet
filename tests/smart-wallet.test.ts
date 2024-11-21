import { projectFactory } from "@clarigen/core";
import { txErr, txOk } from "@clarigen/test";
import { Cl, ClarityType } from "@stacks/transactions";
import { describe, expect, it } from "vitest";
import { accounts, deployments, project } from "../src/clarigen-types";
import { tx } from "@hirosystems/clarinet-sdk";

const { smartWallet } = projectFactory(project, "simnet");

const transferAmount = 100;

describe("test `stx-transfer` public function", () => {
  it("transfers 100 stx to wallet", async () => {
    const stxTransfer = tx.transferSTX(
      10000000000,
      deployments.smartWallet.simnet,
      accounts.wallet_1.address
    );
    simnet.mineBlock([stxTransfer]);
    const response = txOk(
      smartWallet.stxTransfer(transferAmount, accounts.wallet_2.address, null),
      accounts.deployer.address
    );
    console.log("response", response);
    expect(response.result.type).toBe(ClarityType.ResponseOk);
  });

  it("transfers 100 sip10 tokens to wallet", async () => {
    const sip010Contract = "SP32AEEF6WW5Y0NMJ1S8SBSZDAY8R5J32NBZFPKKZ.nope";

    const response = txErr(
      smartWallet.sip010Transfer(
        transferAmount,
        accounts.wallet_2.address,
        null,
        sip010Contract
      ),
      accounts.deployer.address
    );

    expect(response.result).toBeErr(Cl.uint(401));
  });

  it("transfers 1 Nft to wallet", async () => {
    const sip09Contract =
      "SP16GEW6P7GBGZG0PXRXFJEMR3TJHJEY2HJKBP1P5.og-bitcoin-pizza-leather-edition";
    const response = txErr(
      smartWallet.sip009Transfer(
        1,
        "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.smart-wallet",
        sip09Contract
      ),
      accounts.deployer.address
    );

    expect(response.result).toBeErr(Cl.uint(101));
  });
});
