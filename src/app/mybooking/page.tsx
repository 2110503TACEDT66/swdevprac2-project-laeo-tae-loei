
import getBookings from '@/libs/getBookings';

import {BookingItem} from "../../../interface"

import BookingList from '@/components/BookingList';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import getUserProfile from '@/libs/getUserProfile';
import getBooking from '@/libs/getBooking';


export default async function myBooking(){
    const session = await getServerSession(authOptions);
    if(!session) return null;
    const bookings = await getBookings(session.user.token);
    console.log(bookings);
    // const booking = await getBooking(session.user.token, session.user._id);
    // console.log(booking);

    
    return(
        <main className='flex flex-col items-center justify-center'>
            <h1 className="text-2xl font-bold ">Your Bookings</h1>
           {bookings.data && bookings.data.length > 0 ? (
                bookings?.data.map((booking:BookingItem) => (
                    <BookingList key={booking._id} booking={booking} session={session} />
                ))
            ) : (
                <p>No bookings found.</p>
            )}
            
        </main>
    )
}