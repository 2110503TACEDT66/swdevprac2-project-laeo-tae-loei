'use client';

import DateReserve from './DateReserve';
import { use, useState } from 'react';
import { Dayjs } from 'dayjs';
import createBooking  from '@/libs/createBooking';
import { useSession } from "next-auth/react"
import updateBooking from '@/libs/updateBooking';
import { Select, MenuItem, MenuProps, ListItemIcon, Autocomplete, TextField } from "@mui/material";
import NightsStayIcon from '@mui/icons-material/NightsStay';
import PersonIcon from '@mui/icons-material/Person';

export default function UpdateBookingForm({bookId}: {bookId: string}) {

    const [bookDate, setbookDate] = useState<Dayjs | null>(null);
    const [duration, setDuration] = useState<number | null>(null);
    const [roomType, setroomType,] = useState<string | null>(null);
    const menuClass = "px-3 py-1 space-x-2";
    
    const {data: session} = useSession();
    if (!session) {
        return null;
    }

    const updateBookingClick = async () => {
        if (!bookId || !duration || !bookDate) return;
        
        try {
            const EbookDate = bookDate.toDate();
            
            await updateBooking(EbookDate, duration, roomType as string, session.user.token, bookId);
            console.log("updateBooking success");
        } catch (error) {
            console.error("Error update booking:", error);
        }
    };

    return (
        <form className='flex flex-col w-1/2 space-y-5 justify-center mx-auto'>
            <div className='flex flex-row justify-between space-x-5'>
                {/* <HotelTextField value={profileName} type='text' id="name" pText={profileName} label='username' disable={true}/> */}
            </div>
            <div className='flex flex-row justify-between space-x-5'>
                <DateReserve  onDateChange={(value: Dayjs) => {setbookDate(value)}}></DateReserve>
                <Select variant='standard' name='duration' id='duration' className='bg-white w-[100px] focus:outline-none focus:border-none' 
                onChange={(event)=>{setDuration(event.target.value as unknown as number)}} labelId="duration-label" defaultValue={1}
                >
                    <MenuItem value={1}><ListItemIcon className={menuClass}><NightsStayIcon fontSize="small" style={{ marginRight: '8px' }}/>1</ListItemIcon></MenuItem>
                    <MenuItem value={2}><ListItemIcon className={menuClass}><NightsStayIcon fontSize="small" style={{ marginRight: '8px' }}/>2</ListItemIcon></MenuItem>
                    <MenuItem value={3}><ListItemIcon className={menuClass}><NightsStayIcon fontSize="small" style={{ marginRight: '8px' }}/>3</ListItemIcon></MenuItem>
                </Select>
                <Select variant='standard' name='guests' id='guests' className='bg-white' disabled defaultValue={1}>
                    <MenuItem value={1} className={`${menuClass} items-center justify-center py-1`}>
                        <ListItemIcon className={menuClass}><PersonIcon fontSize="small" style={{ marginRight: '8px' }}/>2 adults, 1 room</ListItemIcon>
                    </MenuItem>
                </Select>
            </div>
            <div className='mx-auto'>
                <button type='submit'
                onClick={ (e) =>
                    {
                        e.preventDefault();
                        updateBookingClick();
                    }}
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                    Update
                </button>
            </div>
        </form>
    );
}