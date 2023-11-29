import { useState } from 'react'

import { InfoCard } from '../components'
import { ManageConsumer } from '.'
import { Sample, AddConsumer, IdCard, Warning, Ticket, ManageConsumer as MC } from '../assets'

const Consumers = () => {
    const [manageConsumer, setManageConsumer] = useState(false)

    const handleManageConsumer = () => {
        setManageConsumer(true)
    }

    const handleConsumerClick = () => {
        setManageConsumer(false)
    }

    return (
        <div className='flex flex-col'>
            <div className='flex flex-row justify-start mt-5 gap-3'>
                <div className='rounded-lg shadow-md flex gap-8 h-[132px]' style={{
                    background: 'linear-gradient(180deg, rgba(60, 190, 231, 0.2) 0%, rgba(99, 158, 227, 0.2) 100%)',
                }}>
                    <div className='p-4'>
                        {manageConsumer ?
                            <div className='cursor-pointer font-lato text-base font-small leading-normal text-[#1FB9FC]' onClick={() => handleConsumerClick()}>Consumer {'>'} Manage Consumers</div>
                            : <div className='text-black font-lato text-[1.5rem] font-small'>
                                Hello Shakir!
                            </div>
                        }
                        {manageConsumer ?
                            <div className='mt-2 text-500 text-[1.1rem] font-semibold'>Actions</div>
                            : <div className='text-sm font-normal leading-5 tracking-tight text-[#7B7B7E]'>
                                You have 134 consumers this week.
                            </div>
                        }
                        <div className='flex flex-row gap-2'>
                            <button className='mt-1 flex justify-center items-center gap-2 pt-1 pb-1 pl-4 pr-4 rounded border border-solid border-gray-800 bg-gray-800'>
                                <img src={AddConsumer} alt="add-consumer" /><p className='text-white text-sm font-semibold'>Add Consumer</p>
                            </button>
                            {!manageConsumer && <button className='mt-1 flex justify-center items-center gap-2 pt-1 pb-1 pl-4 pr-4 rounded border border-solid border-[#313945]' onClick={() => handleManageConsumer()}>
                                <img src={MC} alt="manage-consumer" /><p className='text-[#313945] text-sm font-semibold'>Manage Consumer</p>
                            </button>}
                        </div>
                    </div>
                    <div>
                        <img src={Sample} alt="sample" className='p-2 h-full' />
                    </div>
                </div>
                <InfoCard icon={IdCard} name="id-card" info="KYC approval pending" number="276" style="linear-gradient(180deg, rgba(228, 168, 112, 0.2) 0%, rgba(180, 86, 0, 0.2) 100%)" />
                <InfoCard icon={Warning} name="warning" info="high risk consumers" number="182" style="linear-gradient(180deg, rgba(242, 146, 146, 0.2) 0%, rgba(193, 1, 1, 0.2) 100%)" />
                <InfoCard icon={Ticket} name="ticket" info="tickets open" number="32" style="linear-gradient(180deg, rgba(132, 182, 255, 0.2) 0%, rgba(0, 70, 170, 0.2) 100%)" />
            </div>
            
            <p className='text-black font-lato text-base font-medium mt-6'>Consumers Overview</p>
            {manageConsumer && <ManageConsumer />}
        </div>
    )
}

export default Consumers