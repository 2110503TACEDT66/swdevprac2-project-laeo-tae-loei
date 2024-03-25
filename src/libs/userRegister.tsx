export default function userRegister(user: User): Promise<User> {
    return new Promise<User>((resolve, reject) => {
        try {
            fetch('https://presentation-day-1-laeo-tae-loei.vercel.app/api/v1/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.success) {
                        resolve(data.data);
                    } else {
                        reject(data.message);
                    }
                });
        } catch (error) {
            reject(error);
        }
    });
}