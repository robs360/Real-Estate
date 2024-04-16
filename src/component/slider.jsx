import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import bannerImage from '../assets/images/banner.jpg';
import room from '../assets/images/room.jpg'
import hospital from '../assets/images/hos.jpeg'
import build from '../assets/images/build.jpg'

import 'swiper/css';
const Slider=()=>{
   
    return(
        <Swiper className="w-full"
        spaceBetween={50}
        slidesPerView={1}
        
      >
        <SwiperSlide className="w-full">
            <img className="w-[250] rounded-md md:w-[320px] h-[370px] md:h-[400px]" src={room} alt="" srcset="" />
           <p className="font-medium text-white text-[18px]">A home with social-work supervision for people who
             need more than just housing accommodation</p>
        </SwiperSlide>
        <SwiperSlide className="w-full">
            <img className="w-[250] rounded-md md:w-[320px] h-[370px] md:h-[400px]" src={bannerImage} alt="" srcset="" />
            <p className="font-medium text-white text-[18px]">any building that comes with sleeping accommodation for normal residential purposes,</p>
            </SwiperSlide>
        <SwiperSlide className="w-full"><img className="w-[250] rounded-md md:w-[320px] h-[370px] md:h-[400px]" src={build} alt="" srcset="" />
        <p className="font-medium text-white text-[18px]">any building that comes with sleeping accommodation for normal residential purposes,</p>
        </SwiperSlide>
        <SwiperSlide className="w-full"><img className="w-[250] rounded-md md:w-[320px] h-[370px] md:h-[400px]" src={hospital} alt="" srcset="" />
          <p className="font-medium text-white text-[18px]">Residential treatment is a specialized form of inpatient care. It typically includes 24-hour supervision and monitoring within a non-hospital </p>
        </SwiperSlide>
        
      </Swiper>
    )
}
export default Slider