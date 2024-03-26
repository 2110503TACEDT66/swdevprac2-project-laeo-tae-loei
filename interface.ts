interface HotelItem {
    _id: string,
    name: string,
    address: string,
    telephoneNumber: string,
    starRating: number,
    basePrice: number,
    tel: string,
    images: {
      main: string;
    };
}
  
export interface HotelJSON {
  success: boolean,
  count: number,
  pagination: Object,
  data: HotelItem[]
}

export interface BookingItem {
  id: string,
  user: string; 
  hotel: string; 
  roomType: string;
  duration: number;
  bookDate: Date;
  createdAt: Date;
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

interface Book {
  hotel: string,
  date: string,
  duration: number
}