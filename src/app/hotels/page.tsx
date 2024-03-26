import HotelCatalog from "@/components/HotelCatalog"
import { HotelJSON } from "../../../interface"
import getHotels from "@/libs/getHotels"

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
            <HotelCatalog hotelJson={hotels} date={searchParams.date as string} duration={Number(searchParams.duration)} />
        </main>
    )
}