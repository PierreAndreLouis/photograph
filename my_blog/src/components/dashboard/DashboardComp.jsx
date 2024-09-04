import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { Button, Table } from 'flowbite-react';
import { Link } from 'react-router-dom';

export default function DashboardComp() {
  const [users, setUsers] = useState([]);
  const [comments, setComments] = useState([]);
  const [posts, setPosts] = useState([]);
  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch('/api/user/getusers?limit=5');
        const data = await res.json();
        if (res.ok) {
          setUsers(data.users);
          setTotalUsers(data.totalUsers);
          setLastMonthUsers(data.lastMonthUsers);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    const fetchPosts = async () => {
      try {
        const res = await fetch('/api/post/getposts?limit=5');
        const data = await res.json();
        if (res.ok) {
          setPosts(data.posts);
          setTotalPosts(data.totalPosts);
          setLastMonthPosts(data.lastMonthPosts);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    const fetchComments = async () => {
      try {
        const res = await fetch('/api/comment/getcomments?limit=5');
        const data = await res.json();
        if (res.ok) {
          setComments(data.comments);
          setTotalComments(data.totalComments);
          setLastMonthComments(data.lastMonthComments);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    if (currentUser.isAdmin) {
      fetchUsers();
      fetchPosts();
      fetchComments();
    }
  }, [currentUser]);

  return (
    <div className='table-auto p-4 pt-0 w-full max-w-screen-2xl mx-auto overflow-x-auto scrollbar scrollbar-track-slate-100 scrollbar-thumb-slate-300 dark:scrollbar-track-slate-700 dark:scrollbar-thumb-slate-500'>
      <div className='flex flex-col 2xl:flex-row w-full gap-4 justify-center'>
        <div className='flex flex-col justify-center lg:flex-row w-full gap-4'>
          <div className='flex flex-col lg:flex-1 w-full md:w-auto shadow-md p-2 rounded-md dark:bg-gray-800'>
            <div className='flex justify-between p-3 text-sm font-semibold'>
              <h1 className='text-center p-2'>Utilisateurs récents</h1>
              <Button outline gradientDuoTone='purpleToPink'>
                <Link to={'/dashboard?tab=users'}>Voir tout</Link>
              </Button>
            </div>
            <div className='table_boxe overflow-auto table-auto scrollbar scrollbar-track-slate-100 scrollbar-thumb-slate-300 dark:scrollbar-track-slate-700 dark:scrollbar-thumb-slate-500'>
              <Table hoverable>
                <Table.Head>
                  <Table.HeadCell>Image de l’utilisateur</Table.HeadCell>
                  <Table.HeadCell>Nom d'utilisateur</Table.HeadCell>
                </Table.Head>
                {users &&
                  users.map((user) => (
                    <Table.Body key={user._id} className='divide-y'>
                      <Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
                        <Table.Cell>
                          <img
                            src={user.profilePicture}
                            alt='utilisateur'
                            className='w-10 h-10 rounded-full bg-gray-500'
                          />
                        </Table.Cell>
                        <Table.Cell>{user.username}</Table.Cell>
                      </Table.Row>
                    </Table.Body>
                  ))}
              </Table>
            </div>
          </div>

          <div className='flex flex-col lg:flex-1 w-full md:w-auto shadow-md p-2 rounded-md dark:bg-gray-800'>
            <div className='flex justify-between p-3 text-sm font-semibold'>
              <h1 className='text-center p-2'>Commentaires récents</h1>
              <Button outline gradientDuoTone='purpleToPink'>
                <Link to={'/dashboard?tab=comments'}>Voir tout</Link>
              </Button>
            </div>
            <div className='table_boxx overflow-auto table-auto scrollbar scrollbar-track-slate-100 scrollbar-thumb-slate-300 dark:scrollbar-track-slate-700 dark:scrollbar-thumb-slate-500'>
              <Table hoverable>
                <Table.Head>
                  <Table.HeadCell>Profil</Table.HeadCell>
                  <Table.HeadCell>Contenu du commentaire</Table.HeadCell>
                  <Table.HeadCell>Like</Table.HeadCell>
                </Table.Head>
                {comments &&
                  comments.map((comment) => (
                    <Table.Body key={comment._id} className='divide-y'>
                      <Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
                        <Table.Cell>
                          <img
                            src={comment.profilePicture}
                            alt={comment.username}
                            className='w-10 h-10 object-cover bg-gray-500 rounded-full'
                          />
                        </Table.Cell>
                        <Table.Cell className='lg:max-w-[15rem] xl:max-w-full'>
                          <p className='line-clamp-2'>{comment.content}</p>
                        </Table.Cell>
                        <Table.Cell>{comment.numberOfLikes}</Table.Cell>
                      </Table.Row>
                    </Table.Body>
                  ))}
              </Table>
            </div>
          </div>
        </div>

        <div className='flex flex-col lg:flex-1 w-full md:w-autos shadow-md p-2 rounded-md dark:bg-gray-800'>
          <div className='flex justify-between p-3 text-sm font-semibold'>
            <h1 className='text-center p-2'>Publications récentes</h1>
            <Button outline gradientDuoTone='purpleToPink'>
              <Link to={'/dashboard?tab=posts'}>Voir tout</Link>
            </Button>
          </div>
          <div className='overflow-auto table-auto scrollbar scrollbar-track-slate-100 scrollbar-thumb-slate-300 dark:scrollbar-track-slate-700 dark:scrollbar-thumb-slate-500'>
            <Table className='Dash_table' hoverable>
              <Table.Head>
                <Table.HeadCell className='w-20'>Image du post</Table.HeadCell>
                <Table.HeadCell className='min-w-72'>Titre du post</Table.HeadCell>
                <Table.HeadCell>Catégorie</Table.HeadCell>
              </Table.Head>
              {posts &&
                posts.map((post) => (
                  <Table.Body key={post._id} className='divide-y'>
                    <Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
                      <Table.Cell>
                        <img
                          src={post.image}
                          alt='post'
                          className='w-16 h-10 object-cover min-w-16 rounded-md bg-gray-500'
                        />
                      </Table.Cell>
                      <Table.Cell className='w-96'>{post.title}</Table.Cell>
                      <Table.Cell className='w-5'>{post.category}</Table.Cell>
                    </Table.Row>
                  </Table.Body>
                ))}
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}
