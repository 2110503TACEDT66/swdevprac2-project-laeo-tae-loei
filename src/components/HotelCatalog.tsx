import Card from "./Card";
import Link from "next/link";
import { HotelJSON } from "../../interface";

export default async function HotelCatalog({hotelJson}:{hotelJson:HotelJSON}) {
    const hotel = await hotelJson
    console.log(hotel)

    return(
        <div style={{
            margin: "20px",
            display: "flex",
            flexDirection:"column",
            flexWrap:"wrap",
            justifyContent:"center",
            alignContent:"space-around"
        }}>
            {
                hotel.data.map((item) => (
                    <Link href={`/hotels/${item._id}`} className="w-full py-4">
                    <Card hotelName={item.name} imgSrc={"/img/bangkok.jpg"}
                    address={item.address} tel={item.telephoneNumber}
                    rating={item.starRating} price={item.basePrice}/>
                    </Link>
                ))
            }
        </div>
    )
}