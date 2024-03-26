'use client'
import HotelCatalog from "@/components/HotelCatalog"
import { HotelJSON } from "../../../interface"
import getHotels from "@/libs/getHotels"

export default async function HotelsPage() {
    const hotels:HotelJSON = await getHotels()
    return(
        <main>
            <HotelCatalog hotelJson={hotels}/>
        </main>
    )
}