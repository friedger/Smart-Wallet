import { Avatar, Button, Chip, Code, Popover, PopoverContent, PopoverTrigger } from '@heroui/react'
import React, { useEffect, useState } from 'react'
import { QRCodeSVG } from "qrcode.react";
import { IoMdSend } from 'react-icons/io'
import { RiLuggageDepositFill } from 'react-icons/ri'
import { isAuthed, userSession } from '../user-session';
import { IoCopy } from 'react-icons/io5';
import { FaCopy } from 'react-icons/fa';
import { umicrostoActualValue } from '../lib/operator';

function SmartWalletBalance({ stx, sbtc, rates, setShowDepositModal, setShowStxSendModal, clientConfig }) {
    const [address, setAddress] = useState();
    const [copied, setCopied] = useState(false);

    function copy(val) {
        navigator.clipboard.writeText(val);
        setCopied(true);
        setTimeout(() => setCopied(false), 3000);
    }

    useEffect(() => {
        if (isAuthed) {
            const { stxAddress, btcAddress } = userSession?.loadUserData()?.profile;
            setAddress({ stxAddress, btcAddress });
        }
    }, [isAuthed])

    return (
        <div className='w-full flex-1 flex items-center justify-center md:justify-start gap-4'>
            <div className='flex flex-col'>
                <div className='flex gap-3 items-center'>
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
                            <div className="flex flex-col justify-center items-center">
                                <div className="text-small font-bold "><QRCodeSVG value={address?.stxAddress?.[clientConfig?.chain]} width={100} /> </div>
                                <div className="text-tiny flex justify-center items-center gap-2">
                                    {address?.stxAddress?.[clientConfig?.chain]?.replace(/^(.{5}).*(.{5})$/, "$1...$2")}
                                    <Button isIconOnly aria-label={`Stx ${clientConfig?.chain} address`} color={copied ? 'success' : 'warning'} variant="light" onPress={() => copy(address?.stxAddress?.[clientConfig?.chain])}><FaCopy size={10} /></Button>
                                </div>
                            </div>
                        </PopoverContent>
                    </Popover>
                    <div className='flex flex-col gap-1'>
                        <label><Code className='text-warning'>{umicrostoActualValue(stx?.balance, 8) || 0} <Chip size='sm' variant='dot' color='success'>${((umicrostoActualValue(stx?.balance, 8) || 0) * (Number(rates?.['STXUSDT']?.price) || 0)).toFixed(2)}</Chip></Code></label>
                        <h3 className='text-small tracking-tight text-default-500'>rate: <small className='text-primary'>${(Number(rates?.['STXUSDT']?.price) || 0).toFixed(2)}</small></h3>
                    </div>
                </div>

                <div className='flex gap-3 items-center'>
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
                            <div className="flex flex-col justify-center items-center">
                                <div className="text-small font-bold "><QRCodeSVG value={address?.stxAddress?.[clientConfig?.chain]} width={100} /> </div>
                                <div className="text-tiny flex justify-center items-center gap-2">
                                    {address?.stxAddress?.[clientConfig?.chain]?.replace(/^(.{5}).*(.{5})$/, "$1...$2")}
                                    <Button isIconOnly aria-label={`Stx ${clientConfig?.chain} address`} color={copied ? 'success' : 'warning'} variant="light" onPress={() => copy(address?.stxAddress?.[clientConfig?.chain])}><FaCopy size={10} color={copied ? 'success' : ''} /></Button>
                                </div>
                            </div>
                        </PopoverContent>
                    </Popover>
                    <div className='flex flex-col gap-1'>
                        <label><Code className='text-warning'>{umicrostoActualValue(sbtc?.balance, 8) || 0} <Chip size='sm' variant='dot' color='success'>${((umicrostoActualValue(sbtc?.balance, 8) || 0) * (Number(rates?.['BTCUSDT']?.price) || 0)).toFixed(2)}</Chip></Code></label>
                        <h3 className='text-small tracking-tight text-default-500'>rate: <small className='text-primary'>${(Number(rates?.['BTCUSDT']?.price) || 0).toFixed(2)}</small></h3>
                    </div>
                </div>
            </div>

            <div className='flex flex-col gap-4 justify-end'>
                <Button color="warning" radius="full" size="sm" onPress={() => setShowDepositModal(true)}>
                    <RiLuggageDepositFill color='white' />
                </Button>
                <Button color="warning" radius="full" size="sm" onPress={() => setShowStxSendModal(true)}>
                    <IoMdSend color='white' />
                </Button>
            </div>
        </div>
    )
}

export default SmartWalletBalance
