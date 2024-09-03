import React, { useEffect, useState } from 'react'
import {  FaReadme } from "react-icons/fa6";
import { MdOutlineDateRange } from "react-icons/md";
import { Link } from 'react-router-dom';

import { useLocation, useNavigate } from 'react-router-dom';
import Side_bar_blog from './Side_bar_blog';





export default function BlogList() {
    const [recentPosts, setRecentPosts] = useState(null);


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



    // --------------------------------------------------------------------------




    const [sidebarData, setSidebarData] = useState({
        searchTerm: '',
        sort: 'desc',
        category: 'uncategorized',
    });

    console.log(sidebarData);
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showMore, setShowMore] = useState(false);

    const location = useLocation();

    const navigate = useNavigate();

    useEffect(() => {
        const urlParams = new URLSearchParams(location.search);
        const searchTermFromUrl = urlParams.get('searchTerm');
        const sortFromUrl = urlParams.get('sort');
        const categoryFromUrl = urlParams.get('category');
        if (searchTermFromUrl || sortFromUrl || categoryFromUrl) {
            setSidebarData({
                ...sidebarData,
                searchTerm: searchTermFromUrl,
                sort: sortFromUrl,
                category: categoryFromUrl,
            });
        }

        const fetchPosts = async () => {
            setLoading(true);
            const searchQuery = urlParams.toString();
            const res = await fetch(`/api/post/getposts?${searchQuery}`);
            if (!res.ok) {
                setLoading(false);
                return;
            }
            if (res.ok) {
                const data = await res.json();
                setPosts(data.posts);
                setLoading(false);
                if (data.posts.length === 5) {
                    setShowMore(true);
                } else {
                    setShowMore(false);
                }
            }
        };
        fetchPosts();
    }, [location.search]);

    const handleChange = (e) => {
        if (e.target.id === 'searchTerm') {
            setSidebarData({ ...sidebarData, searchTerm: e.target.value });
        }
        if (e.target.id === 'sort') {
            const order = e.target.value || 'desc';
            setSidebarData({ ...sidebarData, sort: order });
        }
        if (e.target.id === 'category') {
            const category = e.target.value || 'uncategorized';
            setSidebarData({ ...sidebarData, category });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const urlParams = new URLSearchParams(location.search);
        urlParams.set('searchTerm', sidebarData.searchTerm);
        urlParams.set('sort', sidebarData.sort);
        urlParams.set('category', sidebarData.category);
        const searchQuery = urlParams.toString();
        navigate(`/blogs?${searchQuery}`);
        // navigate(`/search?${searchQuery}`);
    };

    const handleShowMore = async () => {
        const numberOfPosts = posts.length;
        const startIndex = numberOfPosts;
        const urlParams = new URLSearchParams(location.search);
        urlParams.set('startIndex', startIndex);
        const searchQuery = urlParams.toString();
        const res = await fetch(`/api/post/getposts?${searchQuery}`);
        if (!res.ok) {
            return;
        }
        if (res.ok) {
            const data = await res.json();
            setPosts([...posts, ...data.posts]);
            if (data.posts.length === 5) {
                setShowMore(true);
            } else {
                setShowMore(false);
            }
        }
    };









    return (
        <div className='dark:bg-gray-900 pb-72'>
            {/* <Blog_page1 /> */}
            <div className='mt-20 flex flex-col gap-10 md:flex-row md:gap-4 max-w-7xl mx-auto'>
                <div className='w-[100%]  flex flex-col gap-10 boder-2 border-gray-900'>




                    {!loading && posts.length === 0 && (
                        <p className='text-xl text-gray-500'>No posts found.</p>
                    )}
                    {loading && <p className='text-xl text-gray-500'>Loading...</p>}
                    {!loading &&
                        posts &&
                        posts.map((post) => (

                            <Link to={`/post/${post.slug}`} className='bg-gray-100 dark:bg-gray-800 lg:grid xl:grid-cols-2 gap-4 mx-4 rounded-xl overflow-hidden'>
                                <div className='relative w-full h-[17rem] sm:h-[20rem] md:h-[25rem] xl:h-[20rem]  ' >
                                    <img className='w-full h-full object-cover' src={post.image} alt={post.title} />
                                    <div className='absolute text-white flex flex-col justify-center items-center bottom-0 left-0 bg-orange-400 px-6 py-2'>
                                        <h3 className='text-4xl'>{post && new Date(post.createdAt).getDate()}</h3>
                                        <p>{post && new Date(post.createdAt).toLocaleString('fr-FR', { month: 'long' })}</p>
                                    </div>
                                </div>
                                <div className='px-4'>
                                    <div className='font-bold py-4 text-md border-b dark:border-b-gray-500 border-b-gray-300'>
                                        <p className='line-clamp-3'>{post.title}</p>
                                    </div>
                                    <div className='flex gap-6 text-gray-500 flex-wrap  py-2 border-b  dark:border-b-gray-500 text-sm border-b-gray-300'>
                                        <div className='flex flex-wrap gap-2  '>
                                            <MdOutlineDateRange className='text-orange-400 text-xl' />
                                            <p className='dark:text-gray-300'>{post && new Date(post.createdAt).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
                                        </div>

                                        <div className='flex flex-wrap gap-2  '>
                                            <FaReadme className='text-orange-400 text-xl' />
                                            <p className='dark:text-gray-300'>
                                                {post && (post.content.length / 4000).toFixed(0)} mins lecture
                                            </p>
                                        </div>
                                    </div>

                                    <div className='text-sm mt-3  line-clamp-4 leading-6 text-gray-600 dark:text-gray-300'>
                                        <p className='text-orange-400'>{post.category}</p>
                                        <style>
                                            {`
                                                .post_content a {
                                                // color: #494949;
                                                background: none !important;
                                                }
                                            `}
                                        </style>
                                        <p
                                            className='post_content text-md'
                                            dangerouslySetInnerHTML={{ __html: post && post.content }}
                                        >
                                        </p>
                                    </div>

                                    <div className='flex flex-col xs:flex-row gap-4 py-4 pr-6   justify-between'>
                                        <button className=' w-32 h-8 text-white font-semibold bg-orange-400 hover:bg-orange-500 transition-all'>
                                            Read More
                                        </button>

                                    </div>
                                </div>
                            </Link>

                        ))}
                    {showMore && (
                        <button
                            onClick={handleShowMore}
                            className='text-teal-500 text-lg hover:underline p-7 w-full'
                        >
                            Show More
                        </button>
                    )}





                </div>



                <div>
                    <Side_bar_blog  setLoading setShowMore   />
                </div>


            </div>
        </div>
    )
}
