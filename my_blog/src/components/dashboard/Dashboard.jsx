import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import DashSidebar from './DashSidebar';
import DashProfile from './DashProfile';
// import DashUsers from '../../components/DashUsers.jsx';
import DashComments from './DashComments';
import DashboardComp from './DashboardComp';
import DashPost from './DashPost.jsx';
// import DashUsers from '../../components/dashboard/DashUsers.jsx';
import DashUser from './DashUser.jsx';

import CreatePost from './CreatePost';

export default function Dashboard() {
  const location = useLocation();
  const [tab, setTab] = useState('');
  const [sideBar, setsideBar] = useState(false);
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get('tab');
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);
  return (
    <div className='min-h-screen flex flex-col md:flex-row relative pt-20'>


      {/* Sidebar */}
      <div className='hidden md:block md:w-56'>
        <DashSidebar />
      </div>


      <div className={`fixed z-20 md:hidden top-[3.9rem]  left-0    right-0 z-10  ${sideBar ? "-translate-x-[100%]" : "-translate-x-[00%]"} transition-all duration-300 `}>
        <div className='md:hiddenb bg-gray-300 dark:bg-gray-800 flex justify-between items-center px-6 py-2'>
          <h1 className='font-bold text-xl'>Categories</h1>
          <p onClick={() => { setsideBar(!sideBar) }} className='text-red-500 w-10 h-10 flex justify-center items-center text-xl cursor-pointer'>X</p>
        </div>
        <DashSidebar setsideBar={setsideBar} />
      </div>

      <button onClick={() => { setsideBar(!sideBar) }}
        className='fixed top-0 left-0 z-10 mt-[4.4rem] md:hidden border bg-white border-gray-400 dark:border-gray-600 w-28 py-1 rounded-sm  dark:bg-gray-800 m-3'>
        Dashboard
      </button>

      <p className='h-10'></p>


      {/* <div className='w-full mt-20'> */}


        {/* dashboard comp */}
        {tab === 'dash' && <DashboardComp />}
        {/* profile... */}
        {tab === 'profile' && <DashProfile />}
        {/* posts... */}
        {tab === 'posts' && <DashPost />}
        {/* users */}
        {/* {tab === 'users' && <DashUsers />} */}
        {tab === 'users' && <DashUser />}
        {/* comments  */}
        {tab === 'comments' && <DashComments />}
        {/* Create poste */}
        {tab === 'create-post' && <CreatePost />}

      {/* </div> */}
    </div>
  );
}
{/* <Route path='/create-post' element={<CreatePost />} /> */ }
