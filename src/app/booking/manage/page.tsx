"use client"
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Page() {
    const router = useRouter();

    useEffect(() => {
        router.push('/');
    }, []);

    return (
        <div className='w-screen h-screen text-xl font-bold text-center'>
            Authorized! Redirecting to home...
        </div>
    );
}