"use client";

import { useState } from "react";
import { Connect } from "@stacks/connect-react";

import Avatar from "../components/avatar";
import { isUserAuthed, userSession } from "../services/auth";
import TabsComponents from "../components/tabs";
import Logo from "../components/logo";
import SendFtModal from "../components/modals/sendftmodal";
import Landing from "../pages/landing";
import './globals.css';

const appOrigin = window.location.origin;

export default function Home() {
  const [clientConfig, setClientConfig] = useState({ "http://localhost:3000": { network: 'testnet' } });
  const [selectedContract, setSelectedContract] = useState('');

  // Modal State
  const [sendFtModalOpen, sendFtModalOnOpen] = useState(false);

  const authed = isUserAuthed();
  return (
    <Connect
      authOptions={{
        appDetails: {
          name: "Stacks Next.js Template",
          icon: window.location.origin + "/logo.png",
        },
        redirectTo: "/",
        onFinish: () => {
          window.location.reload();
        },
        userSession,
      }}
    >

      <main className="w-full mymaindiv">
        {!authed && <Landing clientConfig={clientConfig} />}


        {authed &&
          <>
            <div className="w-full flex justify-between items-center">
              <Logo clientConfig={clientConfig} setClientConfig={setClientConfig} />
              <Avatar clientConfig={clientConfig} />
            </div>

            <div style={{ marginTop: '4rem' }} />

            <div className="w-full">
              <TabsComponents clientConfig={clientConfig} setSelectedContract={setSelectedContract} sendFtModalOnOpen={sendFtModalOnOpen} />
            </div>
          </>
        }

        {/* Modals */}
        <SendFtModal sendFtModalOpen={sendFtModalOpen} sendFtModalOnClose={() => sendFtModalOnOpen(false)} props={{ network: clientConfig[appOrigin]['network'], ...selectedContract }} />
      </main>

    </Connect>
  );
}