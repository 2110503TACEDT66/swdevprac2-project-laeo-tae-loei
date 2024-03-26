import { BookingItem } from "../../interface";

export default async function getBookings(token:string, data:BookingItem) {


    const response = await fetch(`https://presentation-day-1-laeo-tae-loei.vercel.app/api/v1/booking`, {
        method: 'GET',
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
