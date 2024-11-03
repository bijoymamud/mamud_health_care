'use client'

import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Container from '../../components/container'

const deals = [
  {
    title: "Apple Air Pods and Over Ear Headphones",
    image1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHxGWtaI2_qlp6Saxw0S5LvGyp_gJGlEGJoQ&s",
    image2: "https://static8.depositphotos.com/1002077/848/i/450/depositphotos_8482965-stock-photo-medical-devices.jpg",
  },
  // Add more deals as needed
]

export default function DealOfWeek() {
  const [timeLeft, setTimeLeft] = useState({
    days: 6,
    hours: 18,
    minutes: 16,
    seconds: 20
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
      <Container className="py-10">
           <div className="w-full mx-auto">
      <div className="flex justify-between items-center mb-2">
            <div>
                  <span className=" font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#CB2584] to-[#792D8F] text-xl ">Deal Of the Week</span>
                  <div className="divider mt-0 h-[2px] bg-[#CB2584]"></div>
            </div>
      </div>

      <div className="relative">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation={{
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
          }}
          pagination={{
            clickable: true,
            el: '.swiper-pagination',
            bulletActiveClass: 'bg-primary',
            bulletClass: 'inline-block w-2 h-2 rounded-full bg-gray-300 mx-1'
          }}
          className="relative"
        >
          {deals.map((deal, index) => (
            <SwiperSlide key={index}>
              <div className="bg-[#D9D9D9]">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <img 
                      src={deal.image1} 
                      alt="AirPods"
                      className="object-contain h-[200px] rounded-tr-[80px] shadow-lg shadow-pink-700"
                    />
                  </div>
                  
                  <div className="flex gap-4 justify-center flex-1">
                    <div className="flex flex-col items-center bg-primary/20 rounded-full w-16 h-16 justify-center">
                      <span className="text-lg font-bold">{timeLeft.days}</span>
                      <span className="text-xs">Days</span>
                    </div>
                    <div className="flex flex-col items-center bg-primary/20 rounded-full w-16 h-16 justify-center">
                      <span className="text-lg font-bold">{timeLeft.hours}</span>
                      <span className="text-xs">Hours</span>
                    </div>
                    <div className="flex flex-col items-center bg-primary/20 rounded-full w-16 h-16 justify-center">
                      <span className="text-lg font-bold">{timeLeft.minutes}</span>
                      <span className="text-xs">Mins</span>
                    </div>
                    <div className="flex flex-col items-center bg-primary/20 rounded-full w-16 h-16 justify-center">
                      <span className="text-lg font-bold">{timeLeft.seconds}</span>
                      <span className="text-xs">Secs</span>
                    </div>
                  </div>

                  <div className="flex-1 text-right">
                    <img 
                      src={deal.image2}
                      alt="Headphones" 
                      className="h-[200px] rounded-ss-[80px] object-contain ml-auto shadow-lg shadow-pink-700"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button className="swiper-button-prev absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center z-10">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button className="swiper-button-next absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center z-10">
          <ChevronRight className="w-5 h-5" />
        </button>

        <div className="swiper-pagination flex justify-center gap-2 mt-4" />
      </div>
    </div>
   </Container>
  )
}