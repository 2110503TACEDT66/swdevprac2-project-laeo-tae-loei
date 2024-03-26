import Image from 'next/image'
import InteractiveCard from './InteractiveCard'
import { Rating } from '@mui/material'
import { HotelJSON } from '../../interface';

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
                <p className='text-xl font-semibold'>{hotelName}</p>
                <div className='flex flex-row m-4'>
                    <div className='w-[50%]'>
                        { rating? <Rating className='h-[10%]'
                        value={rating}/> : ''
                        }
                        <p>{address}</p>
                    </div>
                    <div className='w-[20%] text-right'>
                        <p>Start form</p>
                        <p>THB {price}</p>
                    </div>
                    
                </div>
            </div>
            
        </InteractiveCard>
    )
}