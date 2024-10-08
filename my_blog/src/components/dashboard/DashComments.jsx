import { Modal, Table, Button } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { HiOutlineExclamationCircle } from 'react-icons/hi';

export default function DashComments() {
  const { currentUser } = useSelector((state) => state.user);
  const [comments, setComments] = useState([]);
  const [showMore, setShowMore] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [commentIdToDelete, setCommentIdToDelete] = useState('');

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await fetch(`/api/comment/getcomments`);
        const data = await res.json();
        if (res.ok) {
          const enrichedComments = data.comments.map(comment => ({
            ...comment,
            profilePicture: currentUser.profilePicture,
            username: currentUser.username,
          }));
          // Trier les commentaires du plus récent au plus ancien
          enrichedComments.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
          setComments(enrichedComments);
          if (enrichedComments.length < 9) {
            setShowMore(false);
          }
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    if (currentUser?.isAdmin) {
      fetchComments();
    }
  }, [currentUser?._id]);

  const handleShowMore = async () => {
    const startIndex = comments.length;
    try {
      const res = await fetch(
        `/api/comment/getcomments?startIndex=${startIndex}`
      );
      const data = await res.json();
      if (res.ok) {
        const enrichedComments = data.comments.map(comment => ({
          ...comment,
          profilePicture: currentUser.profilePicture,
          username: currentUser.username,
        }));
        // Trier les nouveaux commentaires du plus récent au plus ancien
        enrichedComments.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
        setComments((prev) => [...prev, ...enrichedComments]);
        if (enrichedComments.length < 9) {
          setShowMore(false);
        }
      }
    } catch (error) {
      console.log(error.message);
    }
  };


  const handleDeleteComment = async () => {
    try {
      const res = await fetch(
        `/api/comment/deleteComment/${commentIdToDelete}`,
        {
          method: 'DELETE',
        }
      );
      const data = await res.json();
      if (res.ok) {
        setComments((prev) =>
          prev.filter((comment) => comment._id !== commentIdToDelete)
        );
        setShowModal(false);
      } else {
        console.log(data.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const formatDate = (dateString) => {
    const options = { day: '2-digit', month: '2-digit', year: '2-digit' };
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', options);
  };

  return (
    <div className='table-auto overflow-x-scroll md:mx-auto p-3 pt-0 scrollbar scrollbar-track-slate-100 scrollbar-thumb-slate-300 dark:scrollbar-track-slate-700 dark:scrollbar-thumb-slate-500'>
      {currentUser?.isAdmin && comments.length > 0 ? (
        <>
          <Table hoverable className='shadow-md'>
            <Table.Head>
              <Table.HeadCell>Date de mise à jour</Table.HeadCell>
              <Table.HeadCell>Profil</Table.HeadCell>
              <Table.HeadCell>Nom d'utilisateur</Table.HeadCell>
              <Table.HeadCell>Contenu du commentaire</Table.HeadCell>
              <Table.HeadCell>Nombre de j'aime</Table.HeadCell>
              <Table.HeadCell>Supprimer</Table.HeadCell>
            </Table.Head>
            {comments.map((comment) => (
              <Table.Body className='divide-y' key={comment._id}>
                <Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
                  <Table.Cell>
                    {formatDate(comment.updatedAt)}
                  </Table.Cell>
                  <Table.Cell>
                    <img
                      src={comment.profilePicture}
                      alt={comment.username}
                      className='w-10 h-10 object-cover bg-gray-500 rounded-full'
                    />
                  </Table.Cell>
                  <Table.Cell>{comment.username}</Table.Cell>
                  <Table.Cell>{comment.content}</Table.Cell>
                  <Table.Cell>{comment.numberOfLikes}</Table.Cell>
                  <Table.Cell>
                    <span
                      onClick={() => {
                        setShowModal(true);
                        setCommentIdToDelete(comment._id);
                      }}
                      className='font-medium text-red-500 hover:underline cursor-pointer'
                    >
                      Supprimer
                    </span>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            ))}
          </Table>
          {showMore && (
            <button
              onClick={handleShowMore}
              className='w-full text-teal-500 self-center text-sm py-7'
            >
              Afficher plus
            </button>
          )}
        </>
      ) : (
        <p>Chargement...</p>
      )}
      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        popup
        size='md'
      >
        <Modal.Header />
        <Modal.Body>
          <div className='text-center'>
            <HiOutlineExclamationCircle className='h-14 w-14 text-gray-400 dark:text-gray-200 mb-4 mx-auto' />
            <h3 className='mb-5 text-lg text-gray-500 dark:text-gray-400'>
              Êtes-vous sûr de vouloir supprimer ce commentaire ?
            </h3>
            <div className='flex justify-center gap-4'>
              <Button color='failure' onClick={handleDeleteComment}>
                Oui, je suis sûr
              </Button>
              <Button color='gray' onClick={() => setShowModal(false)}>
                Non, annuler
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
