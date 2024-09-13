import React, { useEffect, useState } from 'react'
import { MdOutlineDateRange } from "react-icons/md";
import { Link } from 'react-router-dom';
import { Button, Select, TextInput } from 'flowbite-react';
import { useLocation, useNavigate } from 'react-router-dom';



export default function Side_bar_blog({ setLoading, setShowMore }) {
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




    const [sidebarData, setSidebarData] = useState({
        searchTerm: '',
        sort: 'desc',
        category: 'uncategorized',
    });

    console.log(sidebarData);
    const [posts, setPosts] = useState([]);



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
    };


    const handleCategoryClick = (category) => {
        const urlParams = new URLSearchParams(location.search);
        urlParams.set('category', category.toLowerCase());
        const searchQuery = urlParams.toString();
        navigate(`/blogs?${searchQuery}`);
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
        <div>
            <div className='md:min-w-[18rem] md:max-w-[18rem] lg:min-w-[22rem]'>
                <div className='border  dark:border-gray-400 grid mx-4 p-4 bg-gray-200 dark:bg-gray-800 rounded-xl'>
                    {/* Search Section */}
                    <form onSubmit={handleSubmit} className='grid gap-4'>
                        <TextInput
                            placeholder='Recherche...'
                            id='searchTerm'
                            type='text'
                            value={sidebarData.searchTerm}
                            onChange={handleChange}
                        />
                        <div className=' grid grid-cols-2 gap-4'>
                            <div className='grid gap-2 items-center'>
                                <label className='font-semibold'>Trier :</label>
                            </div>
                            <div className='grid gap-2 items-center'>

                                <Select
                                    onChange={handleChange}
                                    value={sidebarData.category}
                                    id='category'
                                >
                                    <option value='uncategorized'>Non classé</option>
                                    <option value='reactjs'>React.js</option>
                                    <option value='nextjs'>Next.js</option>
                                    <option value='javascript'>JavaScript</option>
                                </Select>
                            </div>
                        </div>
                        <Button type='submit' outline gradientDuoTone='purpleToPink'>
                            Appliquer les filtres
                        </Button>
                    </form>







                </div>



                <div className='dark:bg-gray-900 py-10 bg-white'>
                    <section className="w-full max-w-5xl mx-auto  overflow-hidden ">
                        <div id='mc_embed_signup' className="bg-gray-800 p-4 md:rounded-2xl mx-4 flex flex-col gap-y-5 justify-center items-center relative">
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
                                Rejoignez notre programme bêta pour plus de fonctionnalités
                            </h3>
                            <form
                                action={import.meta.env.VITE_NEWSLETTER_LINK}
                                method="post"
                                id="mc-embedded-subscribe-form"
                                name="mc-embedded-subscribe-form"
                                target="_blank"
                                className="validate input-form max-w-2xl mx-auto w-full flex flex-col  gap-y-2 items-center justify-center lg:justify-start gap-x-5 lg:gap-x-5 mt-5">
                                <div className="w-full">
                                    <input
                                        type="email"
                                        name="EMAIL"
                                        id="mce-EMAIL"
                                        placeholder="Entrez votre email"
                                        required
                                        className="required email py-2.5 px-5 placeholder:text-sm rounded-lg text-white bg-white/20 border border-zinc-400/40 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500/50 ring-offset-2 ring-offset-white transition duration-200"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    name="subscribe"
                                    id="mc-embedded-subscribe"
                                    className="button bg-white w-full  hover:shadow-md focus:ring-2 focus:ring-indigo-500/50 ring-offset-2 ring-offset-[#EAE8FF] hover:drop-shadow transition duration-200  text-zinc-800 text-sm rounded-lg px-5 py-2.5 shadow-md group font-clash font-[500]"
                                >
                                    S'abonner
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
                            </form>
                        </div>
                    </section>
                </div>






                <div className='px-4 mt-4'>
                    <h2 className='font-semibold border-2 pb-2 mb-4 border-t-0 border-r-0 border-l-0 border-b-gray-400 text-xl'>CATEGORIES</h2>
                    <div>
                        <p
                            className='border-b border-b-gray-300 py-3 cursor-pointer hover:bg-gray-200 hover:pl-4 transition-all'
                            onClick={() => handleCategoryClick('uncategorized')}
                        >
                            Non classé
                        </p>
                        <p
                            className='border-b border-b-gray-300 py-3 cursor-pointer hover:bg-gray-200 hover:pl-4 transition-all'
                            onClick={() => handleCategoryClick('React.js')}
                        >
                            React.js
                        </p>
                        <p
                            className='border-b border-b-gray-300 py-3 cursor-pointer hover:bg-gray-200 hover:pl-4 transition-all'
                            onClick={() => handleCategoryClick('Next.js')}
                        >
                            Next.js
                        </p>
                        <p
                            className='border-b border-b-gray-300 py-3 cursor-pointer hover:bg-gray-200 hover:pl-4 transition-all'
                            onClick={() => handleCategoryClick('Javascript')}
                        >
                            Javascript
                        </p>
                    </div>
                </div>



                <div className='mt-14 mx-4  grid gap-3'>
                    <h2 className='font-semibold pb-2 text-xl mb-4 border-b-gray-400 border-b-2'>Articles récents</h2>


                    {recentPosts && recentPosts.map((post) => (
                        <Link to={`/post/${post.slug}`} key={post._id} className='flex flex-col gap-4 p-2  bg-gray-100  dark:bg-slate-800  cursor-pointer'>
                            <div className='min-w-[5rem] xmax-w-[5rem] h-full bg-gray-500'>
                                <img className='w-full h-full object-cover'
                                    src={post.image}
                                    alt={post.title}
                                />
                            </div>
                            <div >
                                <div className='flex text-sm mb-1 gap-2 font-semibold text-sky-600 mt-2  '>
                                    <MdOutlineDateRange className=' text-xl' />
                                    <p>{post && new Date(post.createdAt).toLocaleDateString()}</p>
                                </div>
                                <h2 className='font-semibold text-sm sm:text-md leading-5' >
                                    {post.title}
                                </h2>
                            </div>
                        </Link>
                    ))}


                </div>

            </div>
        </div>
    )
}
