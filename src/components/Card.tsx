import Image from 'next/image'
import InteractiveCard from './InteractiveCard'
import StarRating from './StarRating';
import { HotelItem, HotelImage } from '../../interface';
import ImageComponent from './ImageComponent';
import { styled } from '@mui/system';

export default function Card({hotelName}:
    {hotelName:HotelItem}) {
        const hotel = hotelName
        const img = hotel.images
        const pic = img?.main
        console.log(img)
        console.log("pic: " + pic)
    
        //"/img/Standard.jpg"
    return(
        <InteractiveCard>
            <div className="h-full w-[30%] relative">
                <Image src={pic}
                    alt='card image'
                    fill={true}
                    className='object-cover rounded-l-lg'/>
            </div>

            <div className="h-full w-[70%] p-[10px] text-left m-4">
                <div className='text-2xl font-semibold'>{hotel.name}</div>

                <div className='flex flex-row m-4 justify-between'>
                    <div className='w-[70%]'>
                        <StarRating className='h-[10%]' readOnly value={hotel.starRating}/>
                        <p className='text-sky-600'>{hotel.address}</p>
                    </div>

                    <div className='w-[30%]'>
                        <div className=''>Start form</div>
                        <div className='text-red-600 text-lg'>THB {hotel.basePrice}</div>
                    </div>
                    
                </div>
            </div>
            
        </InteractiveCard>
    )
}