"use server"
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function updateBooking(id:string, EstartDate : Date , EendDate : Date , Ehotel : string) {

    const session = await getServerSession(authOptions);

    const response = await fetch(`https://presentation-day-1-laeo-tae-loei.vercel.app/api/v1/booking/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${session?.user.token}`
        },
        body: JSON.stringify({
            startDate: EstartDate,
            endDate: EendDate,
            hotel : Ehotel ,
            //ค่อยเพิ่ม
        })
    });

    if (!response.ok) {
        throw new Error("Failed to update booking")
    }

    return await response.json();
}