interface HotelItem {
    _id: string,
    name: string,
    address: string,
    telephoneNumber: string,
    starRating: number,
    basePrice: number,
    tel: string,
    images: { [key: string]: string }
}
  
interface HotelJSON {
  success: boolean,
  count: number,
  pagination: Object,
  data: HotelItem[]
}

export interface BookingItem {
  user: string; 
  hotel: string; 
  roomType: string;
  checkIn: string;
  checkOut: string;
}

interface User {
  id: string,
  name: string,
  email: string,
  password: string,
  telephoneNumber: string,
  role: string,
  createdAt: Date
}