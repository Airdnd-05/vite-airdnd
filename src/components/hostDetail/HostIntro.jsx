import HostLanguage from '../../assets/HostLanguage.svg'
import HostLocation from '../../assets/HostLocation.svg'
import DescriptionDetail from '../../assets/DescriptionDetail.svg'
import hostInfo from "../../host-detail.json"

function HostIntro(){

    return (
        <div className="ml-[4rem] mt-[1.2rem] ">
        <div className='flex flex-row mb-[0.5rem] '>
        <img src={HostLanguage} className='pr-2 w-[2rem]' ></img>
        <div className="text-left  text-sm">구사 언어: {hostInfo.hostProfile.hostLanguage}</div> 
        </div>         

        <div className='flex flex-row '>
            <img src={HostLocation} className='pr-2  w-[2rem]'></img>   
            <div className=" text-left text-sm">거주지: {hostInfo.hostProfile.hostLocation}</div>

        </div>

            
        <div className="mt-[1rem] text-left text-sm w-full">{hostInfo.hostDescription}...</div>   
        <div className='mt-[0.5rem] flex flex-row'>
            <div className="font-bold underline text-left text-sm">더 보기</div>   
            <img src={DescriptionDetail} className='w-[1rem] pl-2'></img>
        </div>
        </div>
    )
}

export default HostIntro