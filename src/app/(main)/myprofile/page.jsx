'use client'
import { authClient } from "@/lib/auth-client"
import userAvatar from '@/assets/user.png';
import Image from "next/image";
import Link from "next/link";

const MyProfilePage = () => {
    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;
    return (
        <div className="hero min-h-screen">
            {isPending ? (<span className="loading loading-spinner loading-lg"></span>) : user ? (<div className="hero-content flex-col lg:flex-row gap-10">
                <div className="relative w-full max-w-md aspect-square overflow-hidden rounded-lg shadow-2xl">
                    <Image
                        src={user.image || userAvatar}
                        alt={user.name}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <div>
                    <h1 className="text-5xl font-bold">UserName: {user.name}</h1>
                    <button className='btn mr-4 bg-red-500 text-white' onClick={async () => await authClient.signOut()}>Logout</button>
                    <button className="btn btn-info">Update Information</button>
                </div>
            </div>) :
                (
                    <div className='flex flex-col'>
                        <Link href={'/register'}><button className='btn mr-4 bg-blue-500 text-white'>Register</button></Link>
                        <Link href={'/login'}><button className='btn mr-4 bg-green-500 text-white'>Login</button></Link>
                    </div>
                )}
        </div>
    );
};

export default MyProfilePage;