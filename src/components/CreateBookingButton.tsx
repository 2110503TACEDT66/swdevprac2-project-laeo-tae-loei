"use client"
import createBooking from "@/libs/createBooking";
import { BookingItem } from "../../interface"
import { Session } from "inspector";
import { useState } from "react";
import { CircularProgress } from "@mui/material";
import getUserProfile from "@/libs/getUserProfile";

export default function CreateBookingButton({book, session}:{book:BookingItem, session:any}) {
    
    const [isLoading, setIsLoading] = useState(false);
    // console.log(session?.user.token)

    console.log(book)
    
    const handleCreateBooking = async () => {
        
        setIsLoading(true);
        try {
            await createBooking(book.bookDate, 
                book.hotel._id,
                book.duration, 
                book.roomType,
                session?.user.token,
                book.user)
            alert("create booking success");
        } catch (error:any) {
            alert("create booking failed");
        } finally {
            setIsLoading(false);
        }
    };
    


    return (
        <button
            type="button"
            className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md mt-4 mx-auto"
            onClick={() => { handleCreateBooking()}}>
                {
                    isLoading ? <CircularProgress size={24} color="inherit" /> : "BOOK NOW"
                }
        </button>

    )
}