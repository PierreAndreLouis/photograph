import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import OAuth from '../../dashboard/OAuth';
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from '../../../redux/user/userSlice';

export default function SignIn() {
  const [formData, setFormData] = useState({});
  const { loading, error: errorMessage } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      return dispatch(signInFailure('Veuillez remplir tous les champs'));
    }
    try {
      dispatch(signInStart());
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(signInFailure(data.message));
      }
      if (res.ok) {
        dispatch(signInSuccess(data));
        navigate('/');
      }
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };

  return (
    <div className='min-h-screen flex justify-center items-center'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row gap-10'>
        {/* Gauche */}
        <div className='flex-1'>
          <Link to='/' className='font-bold dark:text-white text-4xl'>
            <span className='px-2 py-1 text-sky-500 rounded-lg'>
              Pedro's
            </span>
            Blog
          </Link>
          <p className='text-sm mt-5'>
            Il s'agit d'un projet de démonstration. Vous pouvez vous connecter avec votre e-mail et votre mot de passe ou avec Google.
          </p>
        </div>
        {/* Droite */}
        <div className='flex-1'>
          <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
            <div>
              <Label value='Votre e-mail' />
              <TextInput
                type='email'
                placeholder='nom@entreprise.com'
                id='email'
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value='Votre mot de passe' />
              <TextInput
                type='password'
                placeholder='**********'
                id='password'
                onChange={handleChange}
              />
            </div>
            <button className='py-2 mt-6 rounded-md bg-sky-500 text-white'
              type='submit'
              disabled={loading}
            >
              {loading ? (
                <>
                  <Spinner size='sm' />
                  <span className='pl-3'>Chargement...</span>
                </>
              ) : (
                'Se connecter'
              )}
            </button>
            <OAuth />
          </form>
          <div className='flex gap-2 text-sm mt-5'>
            <span>Vous n'avez pas de compte ?</span>
            <Link to='/sign-up' className='text-blue-500'>
              Inscrivez-vous
            </Link>
          </div>
          {errorMessage && (
            <Alert className='mt-5' color='failure'>
              {errorMessage}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
}
