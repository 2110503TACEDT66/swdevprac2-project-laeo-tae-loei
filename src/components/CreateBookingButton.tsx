"use client"
import createBooking from "@/libs/createBooking";
import { BookingItem } from "../../interface"
import { Session } from "inspector";
import { useState } from "react";
import { CircularProgress } from "@mui/material";

export default function CreateBookingButton({book, session}:{book:BookingItem, session:any}) {
    
    const [loading, setLoading] = useState(false);
    const [complete, setComplete] = useState(false);

    const handleBook = (event: React.MouseEvent<HTMLButtonElement>) =>  {
        setLoading(true);
        createBooking(book, session?.user.token).then(data => {
            setLoading(false);
            setComplete(true);
        }).catch(error => {
            setLoading(false);
            alert("Cannot create booking");
        });
    }

    if (loading) {
        return (
            <div className="flex justify-center items-center py-4">
                <CircularProgress />
            </div>
        );
    }

    if (complete) {
        return (
            <div className="flex justify-center items-center py-2">
                <h1 className="text-2xl font-bold text-center mb-4 text-green-600">Booking created successfully</h1>
            </div>
        );
    }

    return (
        <button
            type="button"
            className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md mt-4 mx-auto"
            onClick={handleBook}>
            BOOK NOW
        </button>

    )
}