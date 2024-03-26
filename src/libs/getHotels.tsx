export default async function getHotels() {
    const response = await fetch("https://presentation-day-1-laeo-tae-loei.vercel.app/api/v1/hotel")

    if(!response) throw new Error("Failed to fetch hotels")
    
    return await response.json()
}