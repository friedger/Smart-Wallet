"use client";

import React from "react";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import { SiVitest } from "react-icons/si";
import styles from "../app/page.module.css";
import { getNetworks } from "../services/auth";
import { api } from "../lib/constants";
import Link from "next/link";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { GrMenu } from "react-icons/gr";

function Logo({ clientConfig, setClientConfig }) {
  const iconClasses =
    "text-xl text-default-500 pointer-events-none flex-shrink-0";
  const stacksNetworks = getNetworks();

  function networkConfig(label) {
    setClientConfig({ chain: label, network: label, api: api[label] });
  }

  return (
    <Dropdown>
      <DropdownTrigger>
        <GrMenu />
      </DropdownTrigger>
      <DropdownMenu aria-label="Dropdown menu with icons" variant="faded">
        <DropdownItem key="networks" isReadOnly endContent={<IoIosArrowDown />}>
          Stacks Networks
        </DropdownItem>
        {stacksNetworks.map((label) => (
          <DropdownItem
            key={label}
            startContent={
              <SiVitest
                className={`${iconClasses} ${
                  clientConfig.network === label
                    ? "text-success"
                    : "text-warning"
                }`}
              />
            }
            onPress={() => networkConfig(label)}
          >
            <Link href={`?network=${label}&chain=${label}&api=${api[label]}`}>
              {label.charAt(0).toUpperCase() + label.slice(1)}
            </Link>
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}

export default Logo;
