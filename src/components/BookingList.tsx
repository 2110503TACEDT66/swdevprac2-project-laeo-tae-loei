'use client'
import { useSession } from "next-auth/react";
import deleteBooking from "@/libs/deleteBooking";
import { useRouter } from "next/navigation";
import Link from "next/link";
import getBookings from "@/libs/getBookings";
import { BookingItem } from "../../interface";

export default async function BookingList(){

    const bookItems = await getBookings()

    
    return( 
        <>
        { bookItems.length === 0 ? <div>No Hotel Booking</div> :
        bookItems?.data.map( (bookingItem : BookingItem) =>(
            <div className="bg-slate-200 rounded px-5 mx-5 py-2 my-2 mb-10" 
            key={bookingItem.id}>
                <div className="text-xl">Hotel: {bookingItem.hotel} </div>
                <div className="text-xl">Check in: {bookingItem.bookDate.toString()} </div>
                <div className="text-xl">Nights: {bookingItem.duration} </div>
                <div className="text-xl">User : {bookingItem.user} </div>
                
                <div className="flex flex-row space-x-4 " >

                <Link href= {`/mybooking/edit/${bookingItem.id}`}>
                <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 
                text-white shadow-sm" > 
                Edit This Booking </button>
                </Link>
                
                <Link href="/mybooking">
                <button className="block rounded-md bg-red-600 hover:bg-red-800 px-3 py-2
                text-white shadow-sm"
                onClick={ ()=> { console.log(bookingItem.id); deleteBooking(bookingItem.id)}}>  
                Remove This Booking </button></Link>
                
        
                </div>
            </div>
        ))
        
        
        }
        </>
        

    )

    //onClick={ () => router.push(`/mybooking/edit/${bookingItem._id}`) }
}