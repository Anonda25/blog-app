import Link from "next/link";



const singlecart = async ({ params }) => {
    const { id } = params;
    const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const post = await data.json()
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="card w-full max-w-md bg-base-100 shadow-lg p-6 rounded-lg">
                <div className="card-body">
                    <h2 className="card-title text-2xl font-bold text-purple-700 mb-4">
                        {post.title}
                    </h2>
                    <p className="text-gray-700 mb-6">{post.body}</p>
                    <p className="text-sm text-gray-500 mb-4">Post ID: {id}</p>
                    <div className="card-actions justify-center">
                        <Link href="/">
                            <button className="btn bg-[#b4c9a1] hover:bg-[#9dab92]">Back to Post card</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default singlecart;