'use client'
import Image from "next/image";
import Link from "next/link";
import { BookingItem } from "../../interface";
import { useRouter } from "next/navigation";
import deleteBooking from "@/libs/deleteBooking";
import {useState} from "react";
import { CircularProgress } from "@mui/material";

export default function BookingList({ booking, session }: { booking: BookingItem, session: any }) {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const handleDeleteBooking = async (id: string) => {
        console.log("hello")
        setIsLoading(true);
        try {
            const token = session?.user.token ?? '';
            await deleteBooking(token, id);
            console.log("delete booking success");
            router.refresh();
        } catch (error:any) {
            console.log(error.message);
        } finally {
            setIsLoading(false);
        }
    };
    

    return (
        <div className="flex flex-col justify-center items-center h-48 w-3/4 mx-auto bg-blue-200 rounded-lg shadow-md hover:shadow-lg transition duration-300 hover:scale-105">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center w-full px-8 py-6 space-y-4 lg:space-y-0 lg:space-x-8">
            <div className="flex flex-col space-y-2 lg:flex-row lg:space-y-0 lg:space-x-6 lg:items-center">
                <i style={{ fontSize: '25px' }} className="fi fi-sr-building"></i>
                <div className="text-xl font-semibold text-blue-800">Hotel: {booking.hotel.name}</div>
            </div>
            <div className="flex flex-col space-y-2 lg:flex-row lg:space-y-0 lg:space-x-6 lg:items-center">
                <i style={{ fontSize: '18px' }} className="fi fi-sr-calendar-day"></i>
                <div className="text-md font-semibold text-blue-800">Book Date: {booking.bookDate.toString()}</div>
            </div>
            <div className="flex flex-col space-y-2 lg:flex-row lg:space-y-0 lg:space-x-6 lg:items-center">
                <i style={{ fontSize: '18px' }} className="fi fi-sr-phone-call"></i>
                <div className="text-md font-semibold text-blue-800">Tel: {booking.hotel.telephoneNumber}</div>
            </div>
            <div className="flex flex-col space-y-2 lg:flex-row lg:space-y-0 lg:space-x-6 lg:items-center">
                <i style={{ fontSize: '18px' }} className="fi fi-sr-phone-call"></i>
                <div className="text-md font-semibold text-blue-800">Room Type: {booking.roomType}</div>
            </div>
            <div className="flex flex-col space-y-2 lg:flex-row lg:space-y-0 lg:space-x-6 lg:items-center">
                <i style={{ fontSize: '18px' }} className="fi fi-sr-phone-call"></i>
                <div className="text-md font-semibold text-blue-800">Duration: {booking.duration}</div>
            </div>
        </div>
    
        <div className="flex justify-center w-full px-8 py-6 space-x-4 lg:justify-end">
            <Link href={`/editbooking/${booking._id}`}>
                <div className="px-6 py-2 max-w-max text-center rounded-full bg-blue-800 shadow-lg text-white text-md font-semibold transition duration-300 hover:scale-105 hover:text-lg">
                    <div className="flex items-center space-x-2">
                        <i style={{ fontSize: '18px' }} className="fi fi-sr-file-edit"></i>
                        <div>Edit</div>
                    </div>
                </div>
            </Link>
            {isLoading ? (
                <div className="px-6 py-2 max-w-max text-center rounded-full bg-blue-800 shadow-lg text-white text-md font-semibold">
                    <CircularProgress color="inherit" size={24} />
                </div>
            ) : (
                <button onClick={() => {console.log(booking?._id); handleDeleteBooking(booking._id as string); router.refresh() }} className="px-6 py-2 max-w-max text-center rounded-full bg-blue-800 shadow-lg text-white text-md font-semibold transition duration-300 hover:scale-105 hover:text-lg">
                    <div className="flex items-center space-x-2">
                        <i style={{ fontSize: '18px' }} className="fi fi-sr-trash"></i>
                        <div>Delete</div>
                    </div>
                </button>
            )}
        </div>
    </div>
    );
}