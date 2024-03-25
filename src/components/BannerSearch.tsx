"use client"
import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";
import { Select, MenuItem, MenuProps, ListItemIcon, Autocomplete, TextField } from "@mui/material";
import NightsStayIcon from '@mui/icons-material/NightsStay';
import PersonIcon from '@mui/icons-material/Person';
import DateReserve from "./DateReserve";

export default function BannerSearch() {
    const options = [
        { label: 'Bangkok', value: 'Bangkok' },
        { label: 'Chiang Mai', value: 'Chiang Mai' },
        { label: 'Phuket', value: 'Phuket'}
    ]
    const [reserveDate, setReserveDate] = useState<Dayjs|null>(null);
    const [duration, setDuration] = useState<number>(1);
    const menuClass = "px-3 py-1 space-x-2";
const MenuProps = {
    getContentAnchorEl: null,
    PaperProps: {
        style: {
            maxHeight: 200,
            width: 300,
        },
    },
};

    return (
        <div className=" bg-gray-200 rounded-3xl flex flex-col items-center justify-center space-y-4">
            <div className="justify-center px-8 pt-6">
                <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={options}
                sx={{ width: 600 }}
                renderInput={(params) => <TextField {...params} label="Enter a destination" 
                className="bg-white"/>}
                />
            </div>
            <div className="flex pb-6 space-x-4">
                <DateReserve onDateChange={(value:Dayjs)=>{setReserveDate(value)}}/>
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
            </div >
        </div>
    )
}