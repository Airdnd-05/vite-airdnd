
import Notice from '../../assets/Notice.svg'
import HostInfoBox from "./HostInfoBox.jsx"
import HostIntro from "./HostIntro.jsx"
import HostDetailInfo from './HostDetailInfo.jsx'
import hostInfo from '../../host-detail.json'
import BeginnerHostInfoBox from './BeginnerHostInfoBox.jsx'

function HostDetail() {

    return (
   
          <div className="bg-host-detail-gray flex flex-row h-[30rem] rounded-[17px] ">
                <div className="ml-10 flex flex-row  ">
                    <div className="flex flex-col  basis-1/3">

                    {hostInfo.hostProfile.hostReviewCount === 0 ?
                        <BeginnerHostInfoBox></BeginnerHostInfoBox>  
                    : <HostInfoBox></HostInfoBox>    }
                    
                    <HostIntro></HostIntro>
                     </div>
                </div>
                   
           <div className="flex flex-col w-full ">

           <div className=" text-left p-[2.3rem] ">
            {hostInfo.hostProfile.isSuperHost ?
            <div>
                <div className='font-bold mb-[1rem]'>{hostInfo.hostProfile.hostName} 님은 슈퍼호스트입니다</div>
                <div className='text-sm mb-[1rem]'>슈퍼호스트는 풍부한 경험과 높은 평점을 자랑하며 게스트가 숙소에서 편안히 머무를 수 있도록 최선을 다하는 호스트입니다.</div>
                <HostDetailInfo></HostDetailInfo>
            </div>
            : <HostDetailInfo></HostDetailInfo>        
            }


            </div>  


               <div className='flex flex-row ml-[2rem] items-center'>
                    <img src={Notice} className='pr-[0.4rem]  w-[1.8rem]'></img>
                    <div className=" w-full text-left text-[0.8em]">안전한 결제를 위해 에어비앤비 웹사이트나 외부에서 송금하거나 대화를 나누지 마세요.</div> 
               </div>
           </div>
           </div>


    )
   }
   
   export default HostDetail
