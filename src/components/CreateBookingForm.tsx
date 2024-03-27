"use client"
import createBooking from "@/libs/createBooking";
import { BookingItem } from "../../interface"
import { Session } from "inspector";
import { useState } from "react";
import getUserProfile from "@/libs/getUserProfile";
import { Select, MenuItem, ListItemIcon, CircularProgress } from "@mui/material";
import NightsStayIcon from '@mui/icons-material/NightsStay';
import DateReserve from "@/components/DateReserve";
import { Dayjs } from 'dayjs';


export default function CreateBookingForm({book, session}:{book:BookingItem, session:any}) {
    
    const [isLoading, setIsLoading] = useState(false);
    const [bookDate, setBookDate] = useState<Dayjs | null>(null);
    const [duration, setDuration] = useState<number | null>(null);
    // console.log(session?.user.token)
    const menuClass = "px-3 py-1 space-x-2";

    console.log(book)
    
    const handleCreateBooking = async () => {
        if ( !duration || !bookDate) return;
        setIsLoading(true);
        const eBookDate = bookDate.toDate();
        try {
            await createBooking(eBookDate, 
                book.hotel._id,
                duration, 
                book.roomType,
                session?.user.token,
                book.user)
            alert("create booking success");
        } catch (error:any) {
            alert("create booking failed");
        } finally {
            setIsLoading(false);
        }
    };
    


    return (
        <form className='rounded-3xl flex flex-col items-center space-y-4 shadow p-6'>
            <div className="h-screen/2 flex items-center justify-center">
            <form className='bg-gray-200 rounded-3xl flex flex-col items-center space-y-4 shadow p-6'>
                <div className='flex space-x-4'>
                    <DateReserve onDateChange={(value: Dayjs) => setBookDate(value)} />
                    <Select variant='standard' name='duration' id='duration' className='bg-white w-[100px] focus:outline-none focus:border-none' 
                        onChange={(event) => setDuration(event.target.value as unknown as number)} labelId="duration-label" defaultValue={1}
                    >
                        <MenuItem value={1}>
                            <ListItemIcon className={menuClass}>
                                <NightsStayIcon fontSize="small" style={{ marginRight: '8px' }} />1
                            </ListItemIcon>
                        </MenuItem>
                        <MenuItem value={2}>
                            <ListItemIcon className={menuClass}>
                                <NightsStayIcon fontSize="small" style={{ marginRight: '8px' }} />2
                            </ListItemIcon>
                        </MenuItem>
                        <MenuItem value={3}>
                            <ListItemIcon className={menuClass}>
                                <NightsStayIcon fontSize="small" style={{ marginRight: '8px' }} />3
                            </ListItemIcon>
                        </MenuItem>
                    </Select>
                </div>
                <div className='mx-auto'>
                    <button type='submit' onClick={handleCreateBooking}
                        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center space-x-2'
                    >
                        {isLoading ? <CircularProgress size={24} color="inherit" /> : "Update"}
                    </button>
                </div>
            </form>
        </div>
        </form>
    );
        
}