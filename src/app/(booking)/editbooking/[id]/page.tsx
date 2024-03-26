
import UpdateBookingForm from '@/components/UpdateBookingForm';
import getHotel from '@/libs/getHotel'
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { BookingItem } from "../../../../../interface";

export default async function UpdateBook({params}: {params: {id: string}}) {
    const session = await getServerSession(authOptions);

    // const profile = await getUserProfile(session!.user.token);

    return (
      <main className="w-full flex flex-col justify-center">
        <h1 className='mx-auto my-12 text-3xl font-sans font-bold
        text-stone-900'>
          Booking
        </h1>
        <UpdateBookingForm  bookId={params.id} />
      </main>
    );
}