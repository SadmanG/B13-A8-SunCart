import { getNewsDetailsById } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { FaArrowRight, FaEye, FaStar } from "react-icons/fa";

export const generateMetadata = async({params}) => {
   const { id } = await params;
   const news = await getNewsDetailsById(id);
   return{
    title : news.title,
    description : news.details,
   };
}

const NewsDetailsPage = async ({ params }) => {
    const { id } = await params;
    const news = await getNewsDetailsById(id);
    return (
        <div className="max-w-4xl mx-auto my-8">
            <div className="card bg-base-100 shadow-sm">
                <div className="card-body">
                    {/* Author Info */}
                    <div className='flex justify-between items-center bg-slate-200 p-4'>
                        <div className='flex gap-1 items-center'>
                            <Image src={news.author.img} alt={news.author?.name} height={40} width={40} className='rounded-full'></Image>
                            <div>
                                <h2 className='font-semibold'>{news.author?.name}</h2>
                                <p className='text-xs'>{news.author?.published_date}</p>
                            </div>
                        </div>
                        <div className='flex justify-between items-center'>
                            <CiBookmark className='text-xl' />
                            <CiShare2 className='text-xl' />
                        </div>
                    </div>
                    <h2 className="card-title">{news.title}</h2>
                    <figure>
                        <Image src={news.image_url} alt={news.title} height={300} width={300} className='w-full'></Image>
                    </figure>
                    <p className=''>{news.details}</p>
                    <div className='flex items-center justify-between gap-2'>
                        <div className='flex items-center gap-2'>
                            <h2 className='flex items-center gap-1'><FaStar className='text-lg text-yellow-300' /> {news.rating.number}</h2>
                            <h2 className='flex items-center gap-1'><FaEye className='text-lg' /> {news.total_view}</h2>
                        </div>
                        <div>
                            <Link href={`/category/${news.category_id}`}>
                                <button className='btn bg-purple-500 text-white'>See Other News in this Category <FaArrowRight/></button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsDetailsPage;