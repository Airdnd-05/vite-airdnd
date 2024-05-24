import hostInfo from "../../host-detail.json"
import isSuperHostIcon from "../../assets/isSuperHostIcon.svg"
import HostRate from "../../assets/HostRate.svg"

function HostInfoBox(){

    return (


        <div className="w-80 h-[12rem] shadow-lg mt-10 ml-14  bg-[white] rounded-[21px]  ">
   <div className="flex flex-row items-center">
       
       <div className="ml-12 mt-4 mr-10">
 
       <div className="w-24 h-24 bg-gray-200 rounded-full overflow-hidden">
            <img src={hostInfo.hostProfile.hostImageUrl} alt="" className="object-cover w-full h-full"/>
        </div>
   
       <div className='flex flex-col items-center mt-2'>
   
           <div className="font-bold mb-2 " >{hostInfo.hostProfile.hostName}</div>
           <div className='text-xs font-bold'>{hostInfo.hostProfile.isSuperHost ? 
           <div className='flex flex-row'> <img src={isSuperHostIcon} className='pr-[0.3rem] w-[1rem]'></img> <div> 슈퍼 호스트</div></div>
              : <div>호스트</div>
        }</div>
       </div>
       </div>
       

        <div className='flex flex-col ml-[1rem] mt-[1.4rem] justify-items-center gap-[1rem]'>
            <div className='flex flex-col'>
                <div className=" text-[0.6rem] font-bold">후기</div>
                <div className='flex flex-row items-center'>
   
                <div className='flex flex-row'>
                    <div className='text-lg font-bold'>{hostInfo.hostProfile.hostReviewCount}</div> <div className='font-bold text-[0.6rem]  pl-[0.2rem] pt-[0.8rem]'>개</div>
                </div>
                    <hr/>
                </div>
            </div>
           <div className='flex flex-col'>
                <div className="text-[0.6rem] font-bold">평점</div>
                <div className='flex flex-row'>
                    <div className='text-lg font-bold'>{hostInfo.hostProfile.hostRate}</div> <img src={HostRate} className=' w-[0.8rem]'></img>
                </div>
           </div>
   
           <div className='flex flex-col'>
                <div className="text-[0.6rem] font-bold">호스팅 경력</div> 
                <div className='flex flex-row'>
                    <div className='text-lg font-bold'>{hostInfo.hostProfile.hostExperience}</div> <div className='font-bold text-[0.6rem] pl-[0.2rem] pt-[0.6rem]'>년</div>
                </div>
           </div>
       </div>
       </div>
</div>

    )
}

export default HostInfoBox;