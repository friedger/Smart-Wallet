import { Avatar, Button, Chip, Code, Popover, PopoverContent, PopoverTrigger } from '@heroui/react'
import React, { useEffect, useState } from 'react'
import { QRCodeSVG } from "qrcode.react";
import { IoMdSend } from 'react-icons/io'
import { RiLuggageDepositFill } from 'react-icons/ri'
import { isAuthed, userSession } from '../user-session';
import { IoCopy } from 'react-icons/io5';
import { FaCopy } from 'react-icons/fa';

function SmartWalletBalance({ balance, stx, sbtc, fungibleToken, setShowDepositModal, setShowStxSendModal, clientConfig }) {
    const [address, setAddress] = useState();

    useEffect(() => {
        if (isAuthed) {
            const { stxAddress, btcAddress } = userSession?.loadUserData()?.profile;
            setAddress({ stxAddress, btcAddress });
        }
    }, [isAuthed])

    console.log({ address, balance, fungibleToken });

    return (
        <div className='w-full gap-2 flex flex-col md:flex-row items-center mt-3'>

            <div className='w-full p-2 flex-1 flex items-center justify-center gap-2'>
                <Popover placement="top">
                    <PopoverTrigger>
                        <Avatar
                            isBordered
                            radius="full"
                            size="md"
                            src='/stx-logo-wallet.svg'
                        />
                    </PopoverTrigger>
                    <PopoverContent>
                        <div className="px-1 py-2 flex flex-col justify-center items-center">
                            <div className="text-small font-bold "><QRCodeSVG value={address?.stxAddress?.[clientConfig?.chain]} width={100} /> </div>
                            <div className="text-tiny flex justify-center items-center gap-2">
                                {address?.stxAddress?.[clientConfig?.chain]?.replace(/^(.{5}).*(.{5})$/, "$1...$2")}
                                <Button isIconOnly aria-label={`Stx ${clientConfig?.chain} address`} color="warning" variant="light"><FaCopy size={10} /></Button>
                            </div>
                        </div>
                    </PopoverContent>
                </Popover>
                <div className='flex flex-col gap-1'>
                    <label><Code className='text-warning'>{balance.toFixed(2)} <Chip size='sm' variant='dot' color='success'>${(balance * stx?.rate?.Price).toFixed(2)}</Chip></Code></label>
                    <h3 className='text-small tracking-tight text-default-500'>Rate: <small className='text-primary'>${stx?.rate?.Price.toFixed(2) || 0}</small></h3>
                </div>
                <div className='flex gap-1'>
                    <Button color="warning" radius="full" size="sm" onPress={() => setShowDepositModal(true)}>
                        <RiLuggageDepositFill color='white' />
                    </Button>
                    <Button color="warning" radius="full" size="sm" onPress={() => setShowStxSendModal(true)}>
                        <IoMdSend color='white' />
                    </Button>
                </div>
            </div>

            <div className='w-full p-2 flex flex-1 items-center justify-center gap-2'>
                <Popover placement="top">
                    <PopoverTrigger>
                        <Avatar
                            isBordered
                            radius="full"
                            size="md"
                            src='/1.png'
                        />
                    </PopoverTrigger>
                    <PopoverContent>
                        <div className="px-1 py-2 flex flex-col justify-center items-center">
                            <div className="text-small font-bold "><QRCodeSVG value={address?.stxAddress?.[clientConfig?.chain]} width={100} /> </div>
                            <div className="text-tiny flex justify-center items-center gap-2">
                                {address?.stxAddress?.[clientConfig?.chain]?.replace(/^(.{5}).*(.{5})$/, "$1...$2")}
                                <Button isIconOnly aria-label={`Stx ${clientConfig?.chain} address`} color="warning" variant="light"><FaCopy size={10} /></Button>
                            </div>
                        </div>
                    </PopoverContent>
                </Popover>
                <div className='flex flex-col gap-1'>
                    <label><Code className='text-warning'>{balance.toFixed(2)} <Chip size='sm' variant='dot' color='success'>${(balance * stx?.rate?.Price).toFixed(2)}</Chip></Code></label>
                    <h3 className='text-small tracking-tight text-default-500'>Rate: <small className='text-primary'>${stx?.rate?.Price.toFixed(2) || 0}</small></h3>
                </div>
                <div className='flex gap-1'>
                    <Button color="warning" radius="full" size="sm" onPress={() => setShowDepositModal(true)}>
                        <RiLuggageDepositFill color='white' />
                    </Button>
                    <Button color="warning" radius="full" size="sm" onPress={() => setShowStxSendModal(true)}>
                        <IoMdSend color='white' />
                    </Button>
                </div>
            </div>

        </div >
    )
}

export default SmartWalletBalance
