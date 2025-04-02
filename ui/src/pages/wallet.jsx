import React, { useEffect, useState } from 'react'
import Header from '../components/header'
import SmartWalletContractAdvisory from '../components/alert/smartWalletContractAdvisory'
import { GrDeploy } from 'react-icons/gr';
import SmartWalletBalance from '../components/smartwalletbalance';
import Tabs from '../components/tabs';
import { getConfig, getSmartWalletBalance, getUserBalance, getWalletContractInfo } from '../services/wallet';
import DepositModal from '../components/modal/depositModal';
import SmartWalletDeployModal from '../components/modal/smartwalletdeploymodal';
import StxSendModal from '../components/modal/stxsendmodal';
import ConfirmedModal from '../components/modal/confirmedmodal';
import { useParams } from 'react-router-dom';
import { userSession } from '../user-session';
import { explorer } from '../lib/constants';
import { Code, Tooltip } from '@heroui/react';

function Wallet({ clientConfig, setClientConfig }) {
    const { address } = useParams();
    const authedUserContract = `${userSession.loadUserData().profile.stxAddress[clientConfig.network]}.smart-wallet`;

    const [smartWalletAddress, setSmartWalletAddress] = useState();

    const [showAdvisory, setShowAdvisory] = useState(false);
    const [advisoryMessage, setAdvisoryMessage] = useState({ title: '', msg: '', reason: '', severity: '' });
    const [contractState, setContractState] = useState(false);

    const [userStx, setUserStx] = useState({});
    const [userFungibleToken, setUserFungible] = useState([]);
    const [userNonFungibleToken, setUserNoneFungible] = useState([]);

    const [smartWalletStx, setSmartWalletStx] = useState({});
    const [smartWalletFungibleToken, setSmartWalletFungible] = useState([]);
    const [smartWalletNonFungibleToken, setSmartWalletNoneFungible] = useState([]);

    // Modals State
    const [showDepositModal, setShowDepositModal] = useState(false);
    const [showSmartWalletModal, setShowSmartWallettModal] = useState(false);
    const [showStxSendModal, setShowStxSendModal] = useState(false);
    const [showConfirmationModal, setConfirmationModal] = useState(false);

    const [tx, setTx] = useState('');

    console.log({ smartWalletAddress, address: Boolean(address), authedUserContract });

    function formatNumber(num) {
        if (isNaN(num)) return 0.0;

        if (num >= 1e9) {
            return (num / 1e9).toFixed(1).replace(/\.0$/, "") + "b"; // Billions
        }
        if (num >= 1e6) {
            return (num / 1e6).toFixed(1).replace(/\.0$/, "") + "m"; // Millions
        }
        if (num >= 1e3) {
            return (num / 1e3).toFixed(1).replace(/\.0$/, "") + "k"; // Thousands
        }
        return num;
    }

    async function openLaunchPad() {
        setShowSmartWallettModal(true);
    }

    async function initWalletbalance(contractAddress) {
        const { stx: smartwallet_stx, fungibleTokens: smartwallet_fungibleTokens, nonFungibleTokens: smartwallet_nonFungibleTokens } = await getSmartWalletBalance(contractAddress, clientConfig);
        const { stx: user_stx, fungibleTokens: user_fungibleTokens, nonFungibleTokens: user_nonFungibleTokens } = await getUserBalance(clientConfig);

        setSmartWalletStx(smartwallet_stx);
        setSmartWalletFungible(smartwallet_fungibleTokens);
        setSmartWalletNoneFungible(smartwallet_nonFungibleTokens);

        setUserStx(user_stx);
        setUserFungible(user_fungibleTokens);
        setUserNoneFungible(user_nonFungibleTokens);
    }

    async function initWalletInstance() {
        let smartWallet, contractStat;
        const res = await getConfig();

        if (Boolean(address)) {
            const { found } = await getWalletContractInfo(address, clientConfig);
            if (found) {
                smartWallet = address;
                contractStat = found;
            }
        } else {
            if (res?.found) {
                smartWallet = res?.address;
                contractStat = res?.found;
            } else {
                smartWallet = '';
                contractStat = false;
            }
        }
        console.log({ smartWallet, contractStat });
        setSmartWalletAddress(smartWallet);
        setContractState(contractStat);
        setAdvisoryMessage({ msg: 'Seems you dont have smart wallet contract deployed yet.', reason: 'Deploy Required', severity: 'secondary' });
        setShowAdvisory(!contractStat);
        setShowSmartWallettModal(!contractStat);
        initWalletbalance(smartWallet);
    }

    useEffect(() => {
        initWalletInstance();
    }, [])

    return (
        <>
            <div className="w-full flex flex-col justify-center gap-6 items-center mt-10 p-2 sm:p-[5%] md:p-[10%] lg:p-[10%]">

                <Header clientConfig={clientConfig} setClientConfig={setClientConfig} />

                {/* Advisory Box */}
                <SmartWalletContractAdvisory show={showAdvisory} props={advisoryMessage} icon={<GrDeploy />} action={openLaunchPad} />

                {contractState &&
                    <div className='w-full flex'>
                        <Tooltip size='sm' content="Click to view on explorer">
                            <Code size='sm' color="secondary"><a href={`${explorer(smartWalletAddress, '', clientConfig?.chain)}`} target='_blank'>{`${smartWalletAddress.slice(0, 6)}...${smartWalletAddress.slice(-16)}`}</a></Code>
                        </Tooltip>
                    </div>
                }

                <SmartWalletBalance balance={formatNumber(parseFloat(smartWalletStx?.balance) / 1000000)} stx={smartWalletStx} setShowDepositModal={setShowDepositModal} setShowStxSendModal={setShowStxSendModal} smartWalletAddress={smartWalletAddress} />

                <Tabs clientConfig={clientConfig} fungibleToken={smartWalletFungibleToken} nonFungibleToken={smartWalletNonFungibleToken} contractState={contractState} setConfirmationModal={setConfirmationModal} setTx={setTx} smartWalletStx={smartWalletStx} smartWalletAddress={smartWalletAddress} />

            </div>

            {/* Modals */}
            {showDepositModal && <DepositModal show={showDepositModal} close={() => setShowDepositModal(false)} stx={userStx} fungibleToken={userFungibleToken} nonFungibleToken={userNonFungibleToken} clientConfig={clientConfig} setTx={setTx} setConfirmationModal={setConfirmationModal} contractState={contractState} smartWalletAddress={smartWalletAddress} />}
            {showSmartWalletModal && <SmartWalletDeployModal show={showSmartWalletModal} close={() => setShowSmartWallettModal(false)} clientConfig={clientConfig} setTx={setTx} setConfirmationModal={setConfirmationModal} contractState={contractState} />}
            {showStxSendModal && <StxSendModal show={showStxSendModal} close={() => setShowStxSendModal(false)} stx={smartWalletStx} clientConfig={clientConfig} setTx={setTx} setConfirmationModal={setConfirmationModal} contractState={contractState} smartWalletAddress={smartWalletAddress} />}
            {showConfirmationModal && <ConfirmedModal show={showConfirmationModal} close={() => setConfirmationModal(false)} tx={tx} clientConfig={clientConfig} />}
        </>
    )
}

export default Wallet