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

interface BookingItem {
  id: string,
  user: string; 
  hotel: string; 
  roomType: string;
  duration: number;
  bookDate: Date;
  createdAt: Date;
}
