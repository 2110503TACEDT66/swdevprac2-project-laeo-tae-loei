import getBookings from '@/libs/getBookings';
import {BookingItem} from "../../../interface"
import BookingList from '@/components/BookingList';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export default async function myBooking(){
    const session = await getServerSession(authOptions);
    if(!session) return null;
    const bookings = await getBookings(session.user.token);
    console.log(bookings);
    
    return(
        <main className='flex flex-col items-center min-h-screen'>
            <h1 className="text-2xl font-bold my-4">Your Bookings</h1>
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