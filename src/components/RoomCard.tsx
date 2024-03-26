import Image from 'next/image'
import InteractiveCard from './InteractiveCard'
import { HotelJSON } from '../../interface';

export default function RoomCard({roomType, imgSrc, bed, cap, shower, smoke, price}:
    {roomType:string, imgSrc:string, bed:string, cap?:number, shower?:boolean, smoke?:boolean, price:number}) {
    
    return(
        <div className='w-[80%] h-[200px] flex flex-row'>
            <div className="h-full w-[30%] relative">
                <Image src={imgSrc}
                    alt='card image'
                    fill={true}
                    className='object-cover'/>
            </div>
            <div className="h-full w-[70%] p-[10px] text-left m-4">
                <p className='text-xl font-semibold'>{roomType}</p>
                <div className='flex flex-row m-4'>
                    <div className='w-[20%]'>
                        <p>{bed}</p>
                    </div>
                    <div className='w-[20%] text-right'>
                        
                    </div>
                    <div className='w-[20%] text-right'>
                        <p>Start form</p>
                        <p>THB {price}</p>
                    </div>
                    <div className='w-[10%] text-center'>
                    <button className="block rounded-md bg-blue-500 hover:bg-indigo-500 px-3 py-2 
                            text-white shadow-sm">Book Now</button> 
                    </div>
                    
                    
                </div>
            </div>
            
        </div>
    )
}