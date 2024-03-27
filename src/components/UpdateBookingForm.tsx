'use client';

import DateReserve from './DateReserve';
import { useState } from 'react';
import { Dayjs } from 'dayjs';
import updateBooking from '@/libs/updateBooking';
import { Select, MenuItem, MenuProps, ListItemIcon, Autocomplete, TextField } from "@mui/material";
import NightsStayIcon from '@mui/icons-material/NightsStay';
import { useRouter } from 'next/navigation';
import { CircularProgress } from '@mui/material';

export default function UpdateBookingForm({bookId,session}: {bookId: string, session: any}) {

    const router = useRouter();
    const [bookDate, setbookDate] = useState<Dayjs | null>(null);
    const [duration, setDuration] = useState<number | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const menuClass = "px-3 py-1 space-x-2";

    const handleUpdateBooking = async () => {
        console.log("updating")
        if (!bookId || !duration || !bookDate) return;

        setIsLoading(true); // Start loading animation
        
        try {
            const EbookDate = bookDate.toDate();        
            await updateBooking(EbookDate, duration, session.user.token, bookId);
            console.log("updateBooking success");
        } catch (error) {
            console.error("Error update booking:", error);
        } finally {
            setIsLoading(false); // Stop loading animation
        }
    };

    return (

        <form className='bg-gray-200 rounded-3xl flex flex-col items-center space-y-4 shadow'>
            <div className='flex space-x-4'>
                <DateReserve  onDateChange={(value: Dayjs) => {setbookDate(value)}}></DateReserve>
                <Select variant='standard' name='duration' id='duration' className='bg-white w-[100px] focus:outline-none focus:border-none' 
                onChange={(event)=>{setDuration(event.target.value as unknown as number)}} labelId="duration-label" defaultValue={1}
                >
                    <MenuItem value={1}><ListItemIcon className={menuClass}><NightsStayIcon fontSize="small" style={{ marginRight: '8px' }}/>1</ListItemIcon></MenuItem>
                    <MenuItem value={2}><ListItemIcon className={menuClass}><NightsStayIcon fontSize="small" style={{ marginRight: '8px' }}/>2</ListItemIcon></MenuItem>
                    <MenuItem value={3}><ListItemIcon className={menuClass}><NightsStayIcon fontSize="small" style={{ marginRight: '8px' }}/>3</ListItemIcon></MenuItem>
                </Select>
            </div>
            <div className='mx-auto'>
                <button type='submit'
                onClick={ () =>
                    {
                        handleUpdateBooking();
                    }}
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                    {isLoading ? <CircularProgress size={24} color="inherit" /> : "Update"}
                </button>
            </div>
        </form>
    );
}