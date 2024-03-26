import { BookingItem } from "../../interface";

export default async function createBooking(book:BookingItem, token:string) {
    console.log(book)

    const response = await fetch(`https://presentation-day-1-laeo-tae-loei.vercel.app/api/v1/hotel/${book.hotel}/booking`, {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json" 
        },
        body: JSON.stringify({ 
            book
        })
    });

    if (!response.ok) {
        throw new Error("Cannot create reservation");
    }
    return await response.json();
}