import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'

import { CoinSack, Logo } from "../assets"
import { sidebar } from "../utils/sidebar"

const Sidebar = ({ activeTab, setActiveTab }) => {
    const navigate = useNavigate()
    // console.log(sidebar)
    const handleClick = (item) => {
        setActiveTab(item.name)
        navigate(item.path)
    }

    return (
        <div className="flex flex-col space-around pl-2 pr-2 gap-8 bg-blue-100" style={{
            backdropFilter: 'blur(12px)',
        }}>
            <div className="flex mt-8 pl-2">
                <img src={Logo} alt="logo" className="w-[36px]" />
                <p className="text-[#5D5FEF] text-shadow font-inter font-medium text-lg">ZINTLR</p>
            </div>
            <div className="flex flex-col">
                {sidebar.map((item, index) => (
                    <div key={index} className={`flex flex-row items-center gap-3 pt-2 pb-2 pl-2 pr-2 ${activeTab === item.name && 'rounded-[20px]  bg-[#4DAEFF]'}`} onClick={() => handleClick(item)}>
                        <div className={`w-[25px] h-full p-1 ${activeTab === item.name && 'rounded-full bg-white'}`}>
                            <img src={item.icon} alt={item.name}/>
                        </div>
                        <p className="text-black font-lato text-sm font-medium opacity-50">{item.name}</p>
                    </div>
                ))}
            </div>
            <div className="pl-2 mb-4">
                <div className="text-black font-lato text-sm font-medium opacity-70">Your Stock</div>
                <div className="rounded-bl-xl rounded-br-xl rounded-tr-xl opacity-90 bg-gradient-to-b from-blue-400 to-blue-600 p-2 relative">
                    <img src={CoinSack} alt="coin-sack" className="absolute w-[150px] top-1 left-0"/>
                    <div className="rounded-md bg-white ml-2 mt-1 flex flex-col items-center">
                        <div className="flex flex-row gap-2">
                            <div className="p-2 pl-2">
                                <div className="text-[#313945] text-custom-font text-base font-normal">TruCoin <span className="text-[#FC6B21]">Gold</span></div>
                                <div className="font-lato text-xs font-medium text-[#5ABF41]">$6.18(+1.82%)</div>
                            </div>
                            <div className="p-2 items-center flex font-lato text-base font-semibold">7.3k gm</div>
                        </div>
                        <div className="flex flex-row gap-2">
                            <div className="p-2 pl-4">
                                <div className="text-[#313945] text-custom-font text-base font-normal">TruCoin <span className="text-[#FC6B21]">Silver</span></div>
                                <div className="font-lato text-xs font-medium text-[#5ABF41]">$6.18(+1.82%)</div>
                            </div>
                            <div className="p-2 items-center flex font-lato text-base font-semibold">8.3k gm</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

Sidebar.propTypes = {
    activeTab: PropTypes.string,
    setActiveTab: PropTypes.func,
}

export default Sidebar