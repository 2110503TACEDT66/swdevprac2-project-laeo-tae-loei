export default async function deleteBooking (token:string, bookingId:string) {
    return fetch(`https://presentation-day-1-laeo-tae-loei.vercel.app/api/v1/hotel`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`
        }
    })
    .then((prev) => {if(prev.ok) return prev.json();})
}