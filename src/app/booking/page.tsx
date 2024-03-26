
import { use, useEffect, useState } from 'react';
import DateReserve from "@/components/DateReserve";
import { redirect, useSearchParams } from "next/navigation"; // Changed from "next/navigation" to "next/router"
import dayjs, { Dayjs } from 'dayjs';
import { useSession } from 'next-auth/react';
import createBooking from '@/libs/createBooking';
import getBookings from '@/libs/getBookings';
import Link from 'next/link';
import { useRouter } from 'next/router'; 
import getUserProfile from '@/libs/getUserProfile';
import { set } from 'mongoose';
import {BookingItem} from "../../../interface"
import { getServerSession } from 'next-auth';
import BookingList from '@/components/BookingList';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export default async function Booking(){

    const session = await getServerSession(authOptions);
    return(
        <main>
            <BookingList bookItems={session ? await getBookings(session.user.token) : null }></BookingList>
        </main>
    )
}