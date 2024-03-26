'use client'
import Image from "next/image";
import getHotel from "@/libs/getHotel";
import RoomCard from "@/components/RoomCard";
import EditHotelButton from "@/components/EditHotelButton";
import { Rating } from "@mui/material";

export default async function HotelDetail({params}:{params:{hid:string}}) {
    const hotel = await getHotel(params.hid)
    const hotelItem = hotel.data
    
    return(
        <main className="">
            <div className="w-[90%] mx-[5%]">
            <Image src={"/img/bangkok.jpg"} alt='Image'
                    width={0} height={0} sizes='100vw'
                    className='rounded-md w-[100%]'/>
            <div className="py-2 text-4xl font-semibold mx-2">{hotelItem.name}
                <Rating name="rating" value={hotelItem.starRating} readOnly />
            </div>

            <div className="flex flexrow my-3 mx-2">
                <div className='text-md flex flex-col text-left'>
                    <div>{hotelItem.address}</div>
                    {hotelItem.telephoneNumber}
                </div>
            </div>
            
            </div>

            <EditHotelButton/>

            <div className="py-6 mx-[10%] w-[90%]">
                {
                    hotelItem.starRating < 4? <RoomCard roomType="Standard" bed={"2 Single Bed"} imgSrc={"/img/Standard.jpg"} price={hotelItem.basePrice}/> : null
                }
                {
                    hotelItem.starRating > 2? <div>
                        <RoomCard roomType="Superior" bed={"1 Double Bed"} imgSrc={"/img/Superior.jpg"} price={hotelItem.basePrice}/>
                        <RoomCard roomType="Deluxe" bed={"1 Double Bed"} imgSrc={"/img/Deluxe.jpg"} price={hotelItem.basePrice}/> 
                    </div> : null
                }
                
                
                {
                    hotelItem.starRating > 4? <RoomCard roomType="Suite" bed={"1 Double Bed"} imgSrc={"/img/Suite.jpg"} price={hotelItem.basePrice + 600}/>:null
                }
                {
                    hotelItem.starRating == 5? <RoomCard roomType="Executive Suite" bed={"1 Double Bed"} imgSrc={"/img/ExSuite.jpg"} price={hotelItem.basePrice + 2000}/>:null
                }
            </div>
        </main>
    )
}