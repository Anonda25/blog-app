import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from 'next/link';
import React from 'react';

const Navber =async () => {

    const {getUser}=getKindeServerSession()
    const user=await  getUser()
    console.log(user);
    return (
        <div className=" ">
            <div className="navbar  px-10 py-3 fixed top-0 left-0 w-full bg-[#8aba87]  text-white shadow-md z-50">
                <div className="flex-1">
                    <Link href={'/'} className="btn btn-ghost text-xl">Blog Page </Link>
                    <ul className="menu menu-horizontal  space-x-3">
                        <Link className="btn btn-outline bg-[#689a8f]" href={'/'}>Home</Link>
                        <Link className="btn btn-outline bg-[#689a8f]" href={'/profile'}>my profile</Link>

                    </ul>
                </div>
                <div className="flex-none">
                    
                    <ul className="flex gap-3 ">
                        {
                            user ? <li>Welcome To {user?.given_name} {user?.family_name} <LogoutLink className="btn btn-outline bg-[#689a8f]" > Log out</LogoutLink></li> : <li> <LoginLink className="btn btn-outline bg-[#689a8f]">Login</LoginLink></li>
                        }
                       
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navber;