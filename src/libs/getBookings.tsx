export default async function getBookings(token: string) {

    const response = await fetch(`https://presentation-day-1-laeo-tae-loei.vercel.app/api/v1/booking`, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${token}`
        }})

    console.log(response)

    if (!response.ok) throw new Error('Failed to fetch User Profile')

    return await response.json()
}   