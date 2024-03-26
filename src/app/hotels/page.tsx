'use client'
import { Suspense } from "react"
import HotelCatalog from "@/components/HotelCatalog"
import { HotelJSON } from "../../../interface"
import getHotels from "@/libs/getHotels"
import LinearProgress from '@mui/material/LinearProgress';

type Props = {
    params: {};
    searchParams: { [key: string]: string | string[] | undefined };
  };  

export default async function HotelsPage(props: Props) {
    const searchParams = props.searchParams;
    console.log(searchParams)
    const hotels:HotelJSON = await getHotels(searchParams)
    return(
        <main>
            <Suspense fallback={
                <p className="text-xl font-medium text-center my-10">Loading ... <LinearProgress/></p>
            }>
            <HotelCatalog hotelJson={hotels} date={searchParams.date as string} duration={Number(searchParams.duration)}/>
            </Suspense>
        </main>
    )
}