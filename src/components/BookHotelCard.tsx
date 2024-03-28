'use client'
import { BookCreateItem, HotelItem } from "../../interface";
import Card from "./Card";

export default function BookHotelCard({hotel, book}:{hotel:HotelItem, book:BookCreateItem}) {
    return (
        <Card hotelName={hotel} book={book} cardType="booking"/>
    )
}