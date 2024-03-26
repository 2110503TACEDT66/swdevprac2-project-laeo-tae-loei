
import { useEffect, useState } from 'react';
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

export default function Booking(){

    return(

        <main>
            <h1>Booking</h1>
        </main>
    )
}