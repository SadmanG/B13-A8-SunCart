import Link from "next/link";

const NotFound = () => {
    return (
        <div className='h-[80vh] flex justify-center items-center flex-col gap-4'>
            <h2 className="font-bold text-5xl text-purple-500">This Page is Not Found!</h2>
            <Link href={'/'}>
                <button className="btn bg-purple-500 text-white">Back to Home</button>
            </Link>
        </div>
    );
};

export default NotFound;