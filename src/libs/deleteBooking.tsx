

import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function deleteBooking(id:string,token:string) {


    const response = await fetch(`https://presentation-day-1-laeo-tae-loei.vercel.app/api/v1/booking/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${token}`
        }
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

