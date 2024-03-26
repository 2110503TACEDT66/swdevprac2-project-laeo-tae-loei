'use client'
import { useSession } from "next-auth/react";

export default function EditHotelButton() {
    const {data:session} = useSession()
    return (
        <div>
            {
            session? 
            <div className="flex flex-row justify-around">
                <button className="block rounded-md bg-blue-500 hover:bg-indigo-500 px-3 py-2 
                text-white shadow-sm">Edit Hotel</button>
                <button className="block rounded-md bg-red-500 hover:bg-red-800 px-3 py-2 
                text-white shadow-sm">Remove Hotel</button>
            </div>  : null
            }
        </div>
        
    )
}