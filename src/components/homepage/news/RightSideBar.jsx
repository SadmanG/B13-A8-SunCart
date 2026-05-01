'use client'
import { authClient } from '@/lib/auth-client';
import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const RightSideBar = () => {
    const handleGoogleSignIn = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
    };
    const handleGithubSignIn = async () => {
        const data = await authClient.signIn.social({
            provider: "github",
        });
    };
    return (
        <div>
            <h2 className='font-bold text-lg mb-6'>Login With</h2>
            <div className='flex flex-col gap-2'>
                <button className='btn border-blue-500 text-blue-500' onClick={handleGoogleSignIn}><FaGoogle /> Login with Google</button>
                <button className='btn' onClick={handleGithubSignIn}><FaGithub /> Login with GitHub</button>
            </div>
        </div>
    );
};

export default RightSideBar;