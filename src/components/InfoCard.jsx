import PropTypes from 'prop-types'

const InfoCard = ({ icon, name, info, number, style }) => {
    return (
        <div className='flex flex-col rounded-lg shadow-md h-[132px] pt-5 pl-5 pr-5 w-52 text-clip justify-between gap-2 items-start pb-5' style={{
            background: `${style}`,
        }}>
            <div className='flex items-start gap-2'>
                <img src={icon} alt={name} className='w-[20px] h-min pt-2' />
                <p className='text-light-black text-[1rem] font-normal text-left leading-none'><span className='text-normal text-light-black text-[1.75rem]'>{number}</span>{info}</p>
            </div>
            <button className='flex justify-center items-center gap-2 pt-1 pb-1 pl-4 pr-4 rounded border border-solid border-gray-800 bg-gray-800'>
                <p className='text-white text-sm'>View List</p>
            </button>
        </div>
    )
}

InfoCard.propTypes = {
    icon: PropTypes.string,
    name: PropTypes.string,
    info: PropTypes.string,
    number: PropTypes.number,
    style: PropTypes.string,
}

export default InfoCard