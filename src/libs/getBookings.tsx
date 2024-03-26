export default async function getBookings(token: string) {
    const response = await fetch("https://presentation-day-1-bbq-bacon-burger.vercel.app/api/v1/bookings/", {
        method: "GET",
        headers: {
            authorization: `Bearer ${token}`,
        },
    })
    if (!response.ok) {
        throw new Error("Failed to fetch Hotels")
    }
    return await response.json();
}