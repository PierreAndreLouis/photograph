import React, { useEffect, useState } from 'react';
import { FaCommentDots, FaReadme } from "react-icons/fa6";
import { MdOutlineDateRange } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { Button, Spinner } from 'flowbite-react';
import { Link, useParams } from 'react-router-dom';
import CommentSection from './CommentSection';
import Side_bar_blog from './Side_bar_blog';
// import Footer3 from '../home/Footer3';

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
                setPost(data.posts[0]);
                setLoading(false);
                setError(false);
            } catch (error) {
                setError(true);
                setLoading(false);
            }
        };
        fetchPost();
    }, [postSlug]);

    useEffect(() => {
        const fetchRecentPosts = async () => {
            try {
                const res = await fetch(`/api/post/getposts?limit=3`);
                const data = await res.json();
                if (res.ok) {
                    setRecentPosts(data.posts);
                }
            } catch (error) {
                console.log(error.message);
            }
        };
        fetchRecentPosts();
    }, []);

    if (loading) {
        return (
            <div className='flex justify-center items-center min-h-screen'>
                <Spinner size='xl' />
            </div>
        );
    }

    return (
        <div>

            <div className='pt-40 flex flex-col gap-10 md:flex-row md:gap-4 max-w-7xl mx-auto dark:bg-gray-900'>
                <div className='w-[100%] flex flex-col gap-10 '>
                    <div className='bg-gray-100 dark:bg-gray-800 grid gap-4 md:mx-4 rounded-xl overflow-hidden'>
                        <div className='relative w-full h-[18rem] sm:h-[20rem] md:h-[24rem] lg:h-[25rem] xl:h-[26rem]'>
                            <img
                                className='w-full h-full object-cover'
                                src={post?.image}
                                alt={post?.title}
                            />
                            <div className='absolute text-white flex flex-col justify-center items-center bottom-0 left-0 bg-orange-400 px-6 py-2'>
                                <h3 className='text-4xl'>{post && new Date(post.createdAt).getDate()}</h3>
                                <p>{post && new Date(post.createdAt).toLocaleString('fr-FR', { month: 'long' })}</p>
                            </div>
                        </div>
                        <div>
                            <div className='font-bold p-4 text-md md:text-lg lg:text-2xl border-b border-b-gray-300 dark:border-b-gray-600'>
                                <p>{post?.title}</p>
                                <Link to={`/search?category=${post?.category}`} className='font-normal text-orange-400 text-sm mt-2'>
                                    {post?.category}
                                </Link>
                            </div>
                            <div className='flex gap-6 text-gray-500 dark:text-gray-400 flex-wrap px-4 py-2 border-b text-sm border-b-gray-300 dark:border-b-gray-600'>
                                <div className='flex gap-2 flex-wrap'>
                                    <FaReadme className='text-orange-400 text-xl' />
                                    <p>{post && (post.content.length / 4000).toFixed(0)} mins lecture</p>
                                </div>
                                <div className='flex gap-2 flex-wrap'>
                                    <MdOutlineDateRange className='text-orange-400 text-xl' />
                                    <p>{post && new Date(post.createdAt).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
                                </div>
                            </div>
                            <style>
                                {`
                                                .post_content a {
                                                // color: #494949;
                                                background: none !important;
                                                }
                                            `}
                            </style>
                       
                            <div

                                dangerouslySetInnerHTML={{ __html: post?.content }}
                                className='dark:text-gray-300 p-4 post_content'
                            />
                        </div>
                    </div>
                    <CommentSection postId={post?._id} />
                </div>
                <div>
                    <Side_bar_blog />
                </div>
            </div>

            <div className='pt-32'>
                <Footer3 />
            </div>

        </div>

    );
}
