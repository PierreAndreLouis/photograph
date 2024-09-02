import React from 'react'
import { FaCommentDots, FaReadme } from "react-icons/fa6";
import { MdOutlineDateRange } from "react-icons/md";
import { FaSearch } from "react-icons/fa";

// import "./style.css"



import { Button, Spinner } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import CommentSection from './CommentSection';
import Side_bar_blog from './Side_bar_blog';





export default function BlogDetails() {

    const { postSlug } = useParams();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [post, setPost] = useState(null);
    const [recentPosts, setRecentPosts] = useState(null);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                setLoading(true);
                const res = await fetch(`/api/post/getposts?slug=${postSlug}`);
                const data = await res.json();
                if (!res.ok) {
                    setError(true);
                    setLoading(false);
                    return;
                }
                if (res.ok) {
                    setPost(data.posts[0]);
                    setLoading(false);
                    setError(false);
                }
            } catch (error) {
                setError(true);
                setLoading(false);
            }
        };
        fetchPost();
    }, [postSlug]);

    useEffect(() => {
        try {
            const fetchRecentPosts = async () => {
                const res = await fetch(`/api/post/getposts?limit=3`);
                const data = await res.json();
                if (res.ok) {
                    setRecentPosts(data.posts);
                }
            };
            fetchRecentPosts();
        } catch (error) {
            console.log(error.message);
        }
    }, []);

    if (loading)
        return (
            <div className='flex justify-center items-center min-h-screen'>
                <Spinner size='xl' />
            </div>
        );


    return (
        <div className='pt-40 flex flex-col gap-10 md:flex-row md:gap-4 max-w-7xl mx-auto dark:bg-gray-900'>
            <div className='w-[200%] flex flex-col gap-10 boder-2 border-gray-900'>






                <div className='bg-gray-100 dark:bg-gray-800 grid gap-4 mx-4 rounded-xl overflow-hidden'>
                    <div className='relative w-full  h-[18rem] sm:h-[20rem] md:h-[24rem] lg:h-[25rem] xl:h-[26rem]  ' >
                        <img className='w-full h-full object-cover'
                            src={post && post.image}
                            alt={post && post.title} />
                        <div className='absolute text-white flex flex-col justify-center items-center bottom-0 left-0 bg-orange-400 px-6 py-2'>
                            <h3 className='text-4xl'>{post && new Date(post.createdAt).getDate()}</h3>
                            <p>{post && new Date(post.createdAt).toLocaleString('fr-FR', { month: 'long' })}</p>
                        </div>
                    </div>
                    <div>
                        <div className='font-bold p-4 text-md md:text-lg  lg:text-2xl border-b border-b-gray-300 dark:border-b-gray-600'>
                            <p>{post && post.title}</p>
                            <Link to={`/search?category=${post && post.category}`}
                                className='font-normal text-orange-400 text-sm mt-2'>{post && post.category}</Link>
                        </div>

                        <div className='flex gap-6 text-gray-500 dark:text-gray-400 flex-wrap px-4 py-2 border-b text-sm border-b-gray-300 dark:border-b-gray-600'>
                            <div className='flex gap-2 flex-wrap '>
                                <FaReadme className='text-orange-400 text-xl' />
                                <p>{post && (post.content.length / 4000).toFixed(0)} mins lecture</p>
                            </div>

                            <div className='flex gap-2 flex-wrap '>
                                <MdOutlineDateRange className='text-orange-400 text-xl' />
                                <p>{post && new Date(post.createdAt).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}</p>


                            </div>


                        </div>


                        <style>
                            {`
                                .post_content a {
                                color: #0099ff;
                                background: none !important;
                                }
                            `}
                        </style>
                       

                        <div
                            dangerouslySetInnerHTML={{ __html: post && post.content }}
                            className='dark:text-gray-300 p-4 post_content'>
                        </div>


                    </div>
                </div>


                <CommentSection postId={post._id} />




            </div>




















            {/* <div className='md:min-w-[18rem] lg:min-w-[22rem]'>
                <div className='border border-gray-400 flex mx-4'>
                    <input className='border-none w-full text-black dark:bg-gray-800 dark:text-white' type='text' placeholder='Search for Blog' />
                    <button className='flex justify-center items-center px-6  text-xl text-white bg-orange-400'>
                        <FaSearch />
                    </button>
                </div>



                <div className='dark:bg-gray-900 py-10 bg-white'>
                    <section className="w-full max-w-5xl mx-auto  overflow-hidden ">
                        <div className="bg-gray-800 p-4 md:rounded-2xl mx-4 flex flex-col gap-y-5 justify-center items-center relative">
                            <svg
                                className="absolute right-0 top-0 overflow-hidden"
                                xmlns="http://www.w3.org/2000/svg"
                                width="227"
                                height="223"
                                viewBox="0 0 227 223"
                                fill="none"
                            >
                                <path
                                    opacity="0.21"
                                    d="M163.766 -28.3772C163.766 -31.8935 161.662 -35.0699 158.422 -36.4473C155.181 -37.8247 151.429 -37.1368 148.891 -34.6996L117.649 -4.71041C71.1338 39.9411 31.8296 91.5182 1.13522 148.185C0.412538 149.459 0 150.932 0 152.501C0 157.345 3.9335 161.271 8.78571 161.271H84.5186V287.378C84.5186 290.852 86.5716 293.998 89.754 295.401C92.9365 296.805 96.6487 296.201 99.2207 293.862L113.199 281.15C162.13 236.652 203.656 184.662 236.217 127.133L244.863 111.856C246.4 109.141 246.377 105.814 244.802 103.121C243.228 100.427 240.339 98.7703 237.214 98.7703H163.766V-28.3772Z"
                                    fill="#F2F9FB"
                                    fillOpacity="0.4"
                                />
                            </svg>
                            <h3 className="text-2xl pt-6 w-full font-bold text-white text-center">
                                Join our beta program for more features
                            </h3>
                            <div className="input-form max-w-2xl mx-auto w-full flex flex-col  gap-y-2 items-center justify-center lg:justify-start gap-x-5 lg:gap-x-5 mt-5">
                                <div className="w-full">
                                    <input
                                        type="text"
                                        placeholder="Enter your email address"
                                        className="py-2.5 px-5 placeholder:text-sm rounded-lg text-white bg-white/20 border border-zinc-400/40 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500/50 ring-offset-2 ring-offset-white transition duration-200"
                                    />
                                </div>
                                <button
                                    className="bg-white w-full  hover:shadow-md focus:ring-2 focus:ring-indigo-500/50 ring-offset-2 ring-offset-[#EAE8FF] hover:drop-shadow transition duration-200  text-zinc-800 text-sm rounded-lg px-5 py-2.5 shadow-md group font-clash font-[500]"
                                >
                                    Send an Email
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 1024 1024"
                                        className="inline-block ml-2"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 0 0 0-48.4z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </section>
                </div>




                <div className='px-4 mt-4'>
                    <h2 className='font-semibold border-2 pb-2 mb-4 border-t-0 border-r-0 border-l-0 border-b-gray-400 text-xl'>CATEGORIES</h2>
                    <div>
                        <p className='border-b border-b-gray-300 dark:border-b-gray-700 py-3 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-800 hover:pl-4 transition-all'>Bidding-and-procurement</p>
                        <p className='border-b border-b-gray-300 dark:border-b-gray-700 py-3 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-800 hover:pl-4 transition-all'>Remodeling</p>
                        <p className='border-b border-b-gray-300 dark:border-b-gray-700 py-3 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-800 hover:pl-4 transition-all'>Management</p>
                        <p className='border-b border-b-gray-300 dark:border-b-gray-700 py-3 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-800 hover:pl-4 transition-all'>Materials</p>
                        <p className='border-b border-b-gray-300 dark:border-b-gray-700 py-3 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-800 hover:pl-4 transition-all'>Design</p>
                    </div>
                </div>


                <div className='mt-14 mx-4  grid gap-3'>
                    <h2 className='font-semibold pb-2 text-xl mb-4 border-b-gray-400 border-b-2'>RECENT POST</h2>



                    {recentPosts && recentPosts.map((post) => (
                        <Link to={`/post/${post.slug}`} key={post._id} className='flex gap-4 p-2  bg-gray-100  dark:bg-slate-800  cursor-pointer'>
                            <div className='w-40 bg-gray-500'>
                                <img className='w-full h-full object-cover'
                                    src={post.image}
                                    alt={post.title}
                                />
                            </div>
                            <div >
                                <h2 className='font-semibold text-sm sm:text-md leading-5' >
                                    {post.title}
                                </h2>
                                <div className='flex gap-2 font-semibold text-orange-400 mt-2  '>
                                    <MdOutlineDateRange className=' text-xl' />
                                    <p>{post && new Date(post.createdAt).toLocaleDateString()}</p>
                                </div>
                            </div>
                        </Link>
                    ))}













                </div>

            </div> */}

            <div>
                <Side_bar_blog />
            </div>













        </div>
    )
}
