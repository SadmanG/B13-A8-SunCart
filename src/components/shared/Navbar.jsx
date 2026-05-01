'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import userAvatar from '@/assets/user.png';
import NavLink from './NavLink';
import { authClient } from "@/lib/auth-client"

const Navbar = () => {
    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;
    return (
        <div className='container mx-auto flex justify-between gap-4 mt-6'>
            <div></div>
            <ul className='flex justify-between items-center text-gray-700 gap-3'>
                <li><NavLink href={'/'}>Home</NavLink></li>
                <li><NavLink href={'/about'}>About</NavLink></li>
                <li><NavLink href={'/career'}>Career</NavLink></li>
            </ul>
            {isPending ? (<span className="loading loading-spinner loading-lg"></span>) : user ? (<div className='flex items-center gap-2'>
                <h2>Hello, {user.name}</h2>
                <Image src={user.image || userAvatar} alt="User Avatar" width={60} height={60}></Image>
                <button className='btn mr-4 bg-red-500 text-white' onClick={async() => await authClient.signOut()}>Logout</button>
            </div>) :
            (
            <div className='flex'>
                <Link href={'/register'}><button className='btn mr-4 bg-blue-500 text-white'>Register</button></Link>
                <Link href={'/login'}><button className='btn mr-4 bg-green-500 text-white'>Login</button></Link>
            </div>
            )}
        </div>
    );
};

export default Navbar;