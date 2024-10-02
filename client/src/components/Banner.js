import {React,useState} from 'react';
import {IoIosArrowRoundBack,IoIosArrowRoundForward} from"react-icons/io";

const Banner = () => {
    const [currentSlide,setCurrentSlide]= useState(0);
    const prevSlide=()=>
    {
        setCurrentSlide(currentSlide === 0 ? 3 : (prev)=>prev - 1) 
    }
    const nextSlide = () =>{
        setCurrentSlide(currentSlide === 0 ? 3 : (prev)=>prev + 1) 
    }
    const data=[
        "https://img.freepik.com/free-vector/flat-horizontal-sale-banner-template-with-photo_23-2149000923.jpg",
        "https://img.freepik.com/psd-gratuitas/modelo-de-banner-compras-online_23-2148537543.jpg?w=2000",
        "https://img.freepik.com/free-psd/modern-sales-banner-template_23-2148995448.jpg",
        "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/sale-online-shopping-happy-women-laptop-ad-design-template-f3105dbab18d7928bd098387718750ad_screen.jpg?ts=1605596403"
    ];
  return (
    <div className="w-full h-auto overflow-x-hidden">
        <div className='w-screen h-[650px] relative'>
            <div style={{transform:`translateX(-${currentSlide * 100}vw)`}} className="w-[400vw] h-full flex transition-transform duration-1000">
                <img className="w-screen h-full object-cover" src={data[0]} alt="ImgOne" loading="priority" />
                <img className="w-screen h-full object-cover" src={data[1]} alt="ImgTwo" loading="priority" />
                <img className="w-screen h-full object-cover" src={data[2]} alt="ImgThree" loading="priority" />
                <img className="w-screen h-full object-cover" src={data[3]} alt="ImgFour" loading="priority" />

            </div>
            <div className="absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-44">
                <div onClick={prevSlide} className="w-16 h-12 border-[3px] bg-white border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300">
                    <IoIosArrowRoundBack />
                    </div>
                <div onClick={nextSlide} className="w-16 h-12 border-[3px] bg-white border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300">
                    <IoIosArrowRoundForward />
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Banner