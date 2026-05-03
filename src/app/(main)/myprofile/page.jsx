'use client'
import { authClient } from "@/lib/auth-client"
import userAvatar from '@/assets/user.png';
import Image from "next/image";

const MyProfilePage = () => {
    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row gap-10">
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
                    <button className="btn btn-info">Update Information</button>
                </div>
            </div>
        </div>
    );
};

export default MyProfilePage;