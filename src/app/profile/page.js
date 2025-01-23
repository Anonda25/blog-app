import { getKindeServerSession, LoginLink } from "@kinde-oss/kinde-auth-nextjs/server";
import Image from "next/image";
import { redirect } from "next/navigation";
import React from "react";

const Profile = async () => {
    const { getUser, isAuthenticated } = getKindeServerSession();
    const user = await getUser();

    if (!(await isAuthenticated())) {
        redirect("/api/auth/login?post_login_redirect_url=/profile");
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="card w-full max-w-sm bg-white shadow-md rounded-lg p-6">
                <div className="flex flex-col items-center">
                    <h2 className="text-xl font-bold text-gray-800 mb-2"> Welcome To {user?.given_name} {user?.family_name}</h2>
                  <Image
                    width={100}
                    height={100}
                    className="rounded-full"
                    alt="image"
                     src={user?.picture}>
                        
                  </Image>
                  
                    <h2 className=" font-thin text-gray-800 mb-2">
                     FullName :   {user?.given_name} {user?.family_name}
                    </h2>
                    <p className="text-gray-600 mb-4  font-thin"> Email : {user?.email}</p>
                    
                </div>
            </div>
        </div>
    );
};

export default Profile;
