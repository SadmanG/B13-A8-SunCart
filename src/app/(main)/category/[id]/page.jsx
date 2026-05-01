import LeftSideBar from '@/components/homepage/news/LeftSideBar';
import NewsCard from '@/components/homepage/news/NewsCard';
import RightSideBar from '@/components/homepage/news/RightSideBar';
import { getCategories, getNewsByCategoryId } from '@/lib/data';
import React from 'react';

export const metadata = {
  title: "SunCart | Home",
  description: "Summer Essentials Store",
};

const CategoryNewsPage = async ({ params }) => {
    const { id } = await params;
    const categories = await getCategories();
    const news = await getNewsByCategoryId(id);
    return (
        <div className="container mx-auto grid grid-cols-5 gap-4 my-15">
            <div className="col-span-1">
                <LeftSideBar categories={categories} activeId={id}></LeftSideBar>
            </div>
            <div className="col-span-3">
                <h2 className="font-bold text-lg">Dragon News</h2>                
                <div className="space-y-4 mt-6">
                    {
                        news.length > 0 ? news.map(n => {
                            return (<NewsCard key={n._id} news={n}>
                                {n.title}
                            </NewsCard>);
                        }) : <h2 className='font-bold text-4xl text-center my-7'>No News Found!</h2>
                    }
                </div>
            </div>
            <div className="col-span-1">
                <RightSideBar></RightSideBar>
            </div>
        </div>
    );
};

export default CategoryNewsPage;