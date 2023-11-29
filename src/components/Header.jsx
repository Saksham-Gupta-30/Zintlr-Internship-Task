import { Search, MoneyBag, Folder, Wallet, Notification, User, DropdownArrow, Ellipse } from "../assets"

const Header = () => {
    return (
        <div className="w-full flex flex-row h-16">
            <div className="flex flex-1 flex-row justify-between pt-3 pb-3 pl-2 pr-2">
                <div className="bg-[#F6FAFC] flex items-center rounded-full w-1/2 justify-between">
                    <input placeholder="Search (Eg: Rewards)" type="search" className="bg-transparent p-3 text-start pl-5 outline-none flex-1" />
                    <button className="items-center bg-white p-[.4rem] rounded-full mr-1">
                        <img src={Search} alt="search" />
                    </button>
                </div>
                <div className="flex flex-row items-center gap-2 justify-center">
                    <div>
                        <img src={MoneyBag} alt="money-bag" />
                    </div>
                    <div>
                        <img src={Wallet} alt="wallet" />
                    </div>
                    <div>
                        <img src={Folder} alt="folder" />
                    </div>
                    <div>
                        <img src={Notification} alt="notification" />
                    </div>
                </div>
            </div>
            <div className="w-1/4 rounded-lg border border-solid border-gray-300 shadow-2xl bg-white opacity-40 ml-2">

            </div>
            <div className="w-[15%] bg-[#F6FAFC] ml-2 rounded-[.5rem] flex items-center justify-center cursor-pointer" style={{
                backdropFilter: 'blur(12px)',
            }}>
                <div className="flex flex-row gap-2 items-center">
                    <div className="p-3 relative">
                        <img src={Ellipse} alt="ellipse" className="absolute top-1 left-[-2px]" />
                        <img src={User} alt="user" className="rounded-[3.5rem] h-[3.2rem] w-[3.2rem]" />
                    </div>
                    <div>
                        <img src={DropdownArrow} alt="dropdown-arrow" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header