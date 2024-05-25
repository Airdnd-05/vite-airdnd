import HostLanguage from '../assets/HostLanguage.svg'
import Notice from '../assets/Notice.svg'
import HostLocation from '../assets/HostLocation.svg'
import DescriptionDetail from '../assets/DescriptionDetail.svg'
import HostRate from "../assets/HostRate.svg"
import TempPersonImg from '../assets/tempPerson.webp'


function App() {

    return (
   
          <div className="bg-stone-200 flex flex-col md:flex-row  h-[27rem] rounded-[20px] ">
          <div className="ml-10 flex flex-row ">
           <div className="basis-1/3">
   
               {/* 호스트 정보 박스 */}
           <div className="w-80 h-[12rem] shadow-lg mt-10 ml-14  bg-[white] rounded-[21px]  ">
   
               <div className="flex flex-row items-center">
                   
                   <div className="ml-12 mt-4 mr-10">
   
                   <div className="w-24 h-24 bg-gray-200 rounded-full overflow-hidden">
                        <img src={TempPersonImg} alt="" className="object-cover w-full h-full"/>
                    </div>

                   <div className='flex flex-col items-center mt-2'>
   
                       <div className="font-bold mb-2 " >주인장</div>
                       <div className='text-xs font-bold'>호스트</div>
                   </div>
                   </div>
                   
                   
                   <div className='flex flex-col ml-[1rem] mt-[1.4rem] justify-items-center gap-[1rem]'>
                        <div className='flex flex-col'>
                            <div className=" text-[0.6rem] font-bold">후기</div>
                            <div className='flex flex-row items-center'>

                            <div className='flex flex-row'>
                                <div className='text-lg font-bold'>1160</div> <div className='font-bold text-[0.6rem]  pl-[0.2rem] pt-[0.8rem]'>개</div>
                            </div>
                                <hr/>
                            </div>
                        </div>
                       <div className='flex flex-col'>
                            <div className="text-[0.6rem] font-bold">평점</div>
                            <div className='flex flex-row'>
                                <div className='text-lg font-bold'>4.16</div> <img src={HostRate} className=' w-[0.8rem]'></img>
                            </div>
                       </div>

                       <div className='flex flex-col'>
                            <div className="text-[0.6rem] font-bold">호스팅 경력</div> 
                            <div className='flex flex-row'>
                                <div className='text-lg font-bold'>7</div> <div className='font-bold text-[0.6rem] pl-[0.2rem] pt-[0.6rem]'>년</div>
                            </div>
                       </div>
                   </div>
               </div>
   
   
           </div>
           <div className="ml-[4rem] mt-[1.9rem] rounded ">
           <div className='flex flex-row mb-[0.5rem] items-center'>
            <img src={HostLanguage} className='pr-2 w-[2rem]' ></img>
           <div className="text-left  text-xs">구사 언어: 영어 및 한국어</div> 
            </div>         

            <div className='flex flex-row items-center'>
                <img src={HostLocation} className='pr-2  w-[2rem]'></img>   
                <div className=" text-left text-xs">거주지: 한국</div>
           
            </div>
           
               
            <div className="mt-[1.3rem] text-left text-xs">ONDA는 다양한 숙박업소분들과 함께 일하는 팀입니다. 한국의 각 지역의 멋진 숙박업소를 찾아 고객님께...</div>   
            <div className='mt-[0.5rem] flex flex-row'>
                <div className="font-bold underline text-left text-sm">더 보기</div>   
                <img src={DescriptionDetail} className='w-[1rem] pl-2'></img>
            </div>
           </div>
           
           </div>
           
           <div className="ml-[3rem]">
               <div className=" text-left p-[2.3rem] ">
                   <div className="text-lg font-bold">호스트 상세 정보</div>
                   <div className='mt-[1rem] text-sm text-left'>응답률: 99%</div>
                   <div className='mb-[1rem] text-sm'>1시간 이내에 응답</div>
                   <button className='w-[13rem] h-[3rem] rounded-[5px] text-sm font-bold bg-black text-white transition-all duration-200 ease-in-out'>호스트에게 메시지 보내기</button>
   
                   <div className='mt-[1.5rem] underline text-sm'>
                       <a href="https://www.naver.com" className="text-black" >사업자 정보</a>
                   </div>
                   <hr className="mt-[1.5rem] border-1 border-gray-300"></hr>
               </div>

               <div className='flex flex-row ml-[2rem] items-center'>
                    <img src={Notice} className='pr-[0.4rem]  w-[1.8rem]'></img>
                    <div className=" w-full text-left text-[0.8em]">안전한 결제를 위해 에어비앤비 웹사이트나 외부에서 송금하거나 대화를 나누지 마세요.</div> 
               </div>
           </div>
           </div>
       </div>
   
    )
   }
   
   export default App
   