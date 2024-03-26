
import { BookingItem } from "../../interface";

export default async function updateBooking(EbookDate:Date,duration:number,roomType:string, token:string, id:string) {


    const response = await fetch(`https://presentation-day-1-laeo-tae-loei.vercel.app/api/v1/booking/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
            hotel: hotel.name,
            bookDate: EbookDate,
            roomType: roomType,
            duration: duration
        })
    });

    if (!response.ok) {
        throw new Error("Failed to update booking")
    }

    return await response.json();
}