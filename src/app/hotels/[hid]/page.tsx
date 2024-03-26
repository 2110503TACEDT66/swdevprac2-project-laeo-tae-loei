import Image from "next/image";
import getHotel from "@/libs/getHotel";
import RoomCard from "@/components/RoomCard";
import EditHotelButton from "@/components/EditHotelButton";

export default async function HotelDetail({params, searchParams}:{params:{hid:string}, searchParams:{date:string, duration:number}}) {
    const hotel = await getHotel(params.hid)
    const hotelItem = hotel.data
    const bookingInformation = {
        hotel: hotelItem._id,
        date: searchParams.date,
        duration: searchParams.duration
    }
    
    return(
        <main className="p-5">
            <Image src={"/img/bangkok.jpg"} alt='Image'
                    width={0} height={0} sizes='100vw'
                    className='rounded-md w-[90%] text-center'/>
            <div className="py-2 text-2xl font-semibold">{hotelItem.name}</div>
            
            <div className="flex flexrow my-5">
                <div className='text-md mx-5 flex flex-col text-left'>
                    <div>{hotelItem.address}</div>
                    {hotelItem.telephoneNumber}
                </div>
            </div>

            <EditHotelButton/>

            <div>
                <RoomCard roomType="Standard" bed={"2 Single Bed"} imgSrc={"/img/bangkok.jpg"} price={1500} book={bookingInformation}/>
                <RoomCard roomType="Deluxe" bed={"1 Double Bed"} imgSrc={"/img/bangkok.jpg"} price={2400} book={bookingInformation}/>
            </div>
        </main>
    )
}