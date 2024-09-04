import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import OAuth from '../../dashboard/OAuth';

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.username || !formData.email || !formData.password) {
      return setErrorMessage('Veuillez remplir tous les champs.');
    }

    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success === false) {
        return setErrorMessage(data.message);
      }
      setLoading(false);
      if (res.ok) {
        navigate('/sign-in');
      }
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
    }
  };

  return (
    <div className='min-h-screen flex justify-center items-center'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row gap-8'>
        {/* Gauche */}
        <div className='flex-1'>
          <Link to='/' className='font-bold dark:text-white text-4xl'>
            <span className='px-2 py-1 text-sky-500 rounded-lg'>
              Pedro's
            </span>
            Blog
          </Link>
          <p className='text-sm mt-5'>
            Il s'agit d'un projet de démonstration. Vous pouvez vous inscrire avec votre e-mail et votre mot de passe ou avec Google.
          </p>
        </div>

        {/* Droite */}
        <div className='flex-1'>
          <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
            <div>
              <Label value='Votre nom d’utilisateur' />
              <TextInput
                type='text'
                placeholder='Nom d’utilisateur'
                id='username'
                onChange={handleChange}
              />
            </div>
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
                placeholder='Mot de passe'
                id='password'
                onChange={handleChange}
              />
            </div>
            <button
              className='py-2 mt-6 rounded-md bg-sky-500 border-2 border-sky-500 text-white'
              type='submit'
              disabled={loading}
            >
              {loading ? (
                <>
                  <Spinner size='sm' />
                  <span className='pl-3'>Chargement...</span>
                </>
              ) : (
                'S’inscrire'
              )}
            </button>
            <OAuth />
          </form>
          <div className='flex gap-2 text-sm mt-5'>
            <span>Vous avez un compte ?</span>
            <Link to='/sign-in' className='text-blue-500'>
              Se connecter
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
