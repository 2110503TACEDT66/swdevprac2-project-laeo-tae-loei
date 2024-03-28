import { BookingJSON } from '../interface';
import { mockBooking } from "../__test__/mockData"
import getBookings from '@/libs/getBookings';


const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MDU1NDRiYjA4OGFhZTM3OGEyNzYxMSIsImlhdCI6MTcxMTYyNTcwMCwiZXhwIjoxNzE0MjE3NzAwfQ.cpVnWccL8jOWm9V4T_Vum4RyZ09_ZxqqJEDQCQlRXGA"

// test API

describe('Booking API', ()=>{
    var BookingJsonResult:BookingJSON
    beforeEach(async () => {
      BookingJsonResult = await getBookings(token)
    })
    
    it('should have correct number of bookings', async ()=>{
        expect(BookingJsonResult.count).toBe(mockBooking.count)
        expect(BookingJsonResult.data).toHaveLength(mockBooking.data.length)
    })
    it('should have correct Ids', async () => {
        const mockIds = mockBooking.data.map(booking => booking._id);
        const resultIds = BookingJsonResult.data.map(booking => booking._id);
        expect(resultIds).toEqual(expect.arrayContaining(mockIds));
    })
  })