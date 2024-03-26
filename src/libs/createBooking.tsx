'use server'

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { BookingItem } from "../../interface";
import { getServerSession } from "next-auth";

export default async function createBooking(bookDate : Date , duration : number , hotel : string, roomType: string) {

    const session = await getServerSession(authOptions);

    const response = await fetch(`https://presentation-day-1-laeo-tae-loei.vercel.app/api/v1/booking`, {
        
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${session?.user.token}`
        },
        body: JSON.stringify({
            bookDate: bookDate,
            duration: duration,
            hotel: hotel,
            roomType: roomType
        })
    });

    if (!response.ok) {
        throw new Error('Failed to fetch bookings');
    }

    try {
        const jsonData = await response.json();
        console.log(jsonData); // Logging the response JSON after parsing
        return jsonData;
    } catch (error) {
        console.error('Failed to parse JSON response:', error);
        throw new Error('Failed to parse JSON response');
    }
}