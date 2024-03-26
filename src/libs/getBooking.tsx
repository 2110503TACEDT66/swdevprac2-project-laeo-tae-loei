'use server'

import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { useEffect } from "react";

export default async function getBooking(id:string) {

    const session = await getServerSession(authOptions);

    const response = await fetch(`http://localhost:3500/api/v1/bookings/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${session?.user.token}`
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