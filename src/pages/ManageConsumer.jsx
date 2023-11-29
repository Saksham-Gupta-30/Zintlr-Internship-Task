import { Search, Refresh, MicrosoftExcel, Filter, CSV, DropDown } from "../assets"
import { data } from "../utils/data"

const ManageConsumer = () => {
    return (
        <div className="w-full flex flex-col">
            <div className="flex flex-row justify-between">
                <div className="flex items-center w-1/3 justify-between rounded-md border border-solid border-gray-300 bg-white">
                    <input placeholder="Search Consumers" type="search" className="bg-transparent p-2 text-start pl-5 outline-none flex-1" />
                    <button className="items-center p-[.4rem] rounded-full mr-1">
                        <img src={Search} alt="search" />
                    </button>
                </div>
                <div className="flex gap-1">
                    <button className="bg-[#313945] pl-1 pr-1 border rounded-[0.25rem] flex items-center justify-center">
                        <img src={Refresh} alt="refresh" />
                    </button>
                    <button className="flex items-center justify-center rounded border border-solid border-[#313945] pl-4 pr-4">
                        <img src={MicrosoftExcel} alt="microsoft-excel" />
                    </button>
                    <button className="flex items-center justify-center rounded border border-solid border-[#313945] pl-4 pr-4">
                        <img src={CSV} alt="csv" />
                    </button>
                    <button className="flex items-center justify-center rounded text-white bg-[#4DAEFF] pl-3 pr-3 font-semibold">
                        <img src={Filter} alt="filter" />
                        Filter
                    </button>
                </div>
            </div>
            <div>
                <table className="w-full mt-1">
                    <thead className="bg-[#DDEBFF]">
                        <tr className="h-[50px]">
                            <th className="pl-4 text-sm font-semibold flex justify-start pt-4">Consumer Name</th>
                            <th className="text-sm font-semibold">
                                <div className="flex gap-2 items-center">
                                    <div>Assets</div>
                                    <img src={DropDown} alt="drop-down" />
                                </div>
                            </th>
                            <th className="text-sm font-semibold">
                                <div className="flex gap-2 items-center">
                                    <div>Revenue</div>
                                    <img src={DropDown} alt="drop-down" />
                                </div>
                            </th>
                            <th className="text-sm font-semibold">
                                <div className="flex gap-2 items-center">
                                    <div>KYC Status</div>
                                    <img src={DropDown} alt="drop-down" />
                                </div>
                            </th>
                            <th className="pl-4 text-sm font-semibold flex items-center justify-start">Facilitator</th>
                            <th className="text-sm font-semibold">
                                <div className="flex gap-2 items-center">
                                    <div>Zone</div>
                                    <img src={DropDown} alt="drop-down" />
                                </div>
                            </th>
                            <th className="text-sm font-semibold">
                                <div className="flex gap-2 items-center">
                                    <div>Account Type</div>
                                    <img src={DropDown} alt="drop-down" />
                                </div>
                            </th>
                            <th className="pl-4 text-sm font-semibold flex items-center justify-start">TPA</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index} className={`h-16 ${index % 2 ? 'bg-[#F6FAFC]' : 'bg-white'}`}>
                                <td className="pt-5 pl-4 text-[0.8rem] text-[#0153C9] font-normal flex items-center justify-start ">
                                    {item.name} {item?.notifications && <span className="pl-2 pr-2 text-[.5rem] self-center text-center ml-1 bg-[#F55] text-white rounded-xl">{item.notifications}</span>}
                                </td>
                                <td className="text-sm font-normal">{item.assets.money}</td>
                                <td className="text-[1rem] font-semibold text-[#313945]">{item.revenue}</td>
                                <td className="text-sm font-normal">
                                    <p className="w-[5.5rem] text-center text-normal font-bold rounded-full pt-1 pb-1 text-[#27A607]" style={{
                                        backgroundColor: item.kyc === 'Done' ? '#EAFFE0' : item.kyc === 'Pending' ? '#FFE9E9' : item.kyc === 'Rejected' ? '#F1F1F1' : '#FFF2D0',
                                        color: item.kyc === 'Done' ? '#3BBA1B' : item.kyc === 'Pending' ? '#FC5A5A' : item.kyc === 'Rejected' ? '#8E8E8E' : '#DBA00A',
                                    }}>
                                        {item.kyc}
                                    </p>
                                </td>
                                <td className="pl-4 text-sm font-normal flex items-center justify-start">{item.facilitator.b2bFieldExecutive}</td>
                                <td className="text-sm font-normal">{item.zone}</td>
                                <td className="text-sm font-normal">{item.accountType}</td>
                                <td className="pl-4 text-sm font-normal flex items-center justify-start">{item.tpa}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ManageConsumer