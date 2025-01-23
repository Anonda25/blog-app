import Link from 'next/link';
import React from 'react';

const Postcard = ({ post }) => {
    const { title, body, id } = post;

    return (
        <div>
            
            <div className="card card-compact bg-base-100 shadow-xl h-full hover:scale-105 transition">
                <div className="card-body flex flex-col">
                    <h2 className="card-title">{title}</h2>
                    <p className="flex-grow">{body}</p>
                    <div className="mt-4">
                        <Link href={`/postcard/${id}`} className="btn bg-[#b4c9a1] w-full rounded-full">
                            Details
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Postcard;
