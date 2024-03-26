import Image from 'next/image'
import InteractiveCard from './InteractiveCard'
import { Rating } from '@mui/material'
import { HotelJSON } from '../../interface';
import ImageComponent from './ImageComponent';

export default function Card({hotelName, imgSrc, rating, address, tel, price}:
    {hotelName:string, imgSrc:string, rating?:number, address:string, tel:string, price:number}) {
    
    return(
        <InteractiveCard>
            <div className="h-full w-[30%] relative">
                <Image src={imgSrc}
                    alt='card image'
                    fill={true}
                    className='object-cover'/>
            </div>

            <div className="h-full w-[70%] p-[10px] text-left m-4">
                <div className='text-2xl font-semibold'>{hotelName}</div>

                <div className='flex flex-row m-4 justify-between'>
                    <div className='w-[70%]'>
                        { rating? <Rating className='h-[10%]' readOnly
                        value={rating}/> : ''
                        }
                        <p className='text-sky-600'>{address}</p>
                    </div>

                    <div className='w-[30%]'>
                        <div className=''>Start form</div>
                        <div className='text-red-600 text-lg'>THB {price}</div>
                    </div>
                    
                </div>
            </div>
            
        </InteractiveCard>
    )
}