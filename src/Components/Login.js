
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useSnackbar } from 'notistack';
import loginImg from '../img/login.jpg';
import { storeToken } from '../Services/LocalStorageServices';
import Navbar from './Navbar';  // Import the Navbar component

const LoginStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  @media (min-width: 640px) {
    grid-template-columns: 1fr 1fr;
  }
  height: 100vh;

  .image-container {
    display: none;
    @media (min-width: 640px) {
      display: block;
    }
  }
  .image-container img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  .form-container {
    background-color: #1a202c;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
  }

  .form {
    max-width: 400px;
    width: 100%;
  }

  .form h2 {
    font-size: 2rem;
    font-weight: bold;
    color: #ffffff;
    text-align: center;
    margin-bottom: 1rem;
  }

  .form label {
    color: #cbd5e0;
    margin-bottom: 0.5rem;
  }

  .form input {
    background-color: #2d3748;
    border: 1px solid #4a5568;
    color: #cbd5e0;
    padding: 0.75rem;
    border-radius: 0.25rem;
    width: 100%;
    margin-bottom: 1rem;
    transition: border-color 0.3s ease;
  }

  .form input:focus {
    outline: none;
    border-color: #38a169;
  }

  .form button {
    background-color: #2b6cb0;
    color: #ffffff;
    font-weight: bold;
    padding: 0.75rem 1.5rem;
    border-radius: 0.25rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
    width: 50%;
  }

  .form button:hover {
    background-color: #2c5282;
  }
`;

const Login = () => {
  const [formData, setFormData] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/accounts/login/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.error && data.error.non_field_errors) {
        enqueueSnackbar(<p>{data.error.non_field_errors[0]}</p>, { variant: 'error' });
        return;
      }

      if (data.msg) {
        enqueueSnackbar(<p>{data.msg}</p>, { variant: 'success' });
      }

      localStorage.setItem('id', data.data.user_id);
      storeToken(data.token);

      setFormData({ email: '', password: '' });
      setIsAuthenticated(true);
      navigate('/Follow-ups');
    } catch (error) {
      enqueueSnackbar(<p>Enter The Correct Email and Password</p>, { variant: 'error' });
    }
  };

  return (
    <>
      {isAuthenticated && <Navbar />}
      <LoginStyled>
        <div className='image-container'>
          <img src={loginImg} alt='Login' />
        </div>
        <div className='form-container'>
          <form className='form' onSubmit={handleSignIn}>
            <h2>SIGN IN</h2>
            <div>
              <label>Username</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email || ''}
                onChange={handleChange}
                className='rounded-lg bg-gray-800 border border-gray-700 text-white px-4 py-3 w-full mt-2 focus:outline-none focus:border-green-500 transition duration-300'
              />
            </div>
            <div>
              <label>Password</label>
              <input
                type='password'
                name='password'
                value={formData.password || ''}
                onChange={handleChange}
                className='rounded-lg bg-gray-800 border border-gray-700 text-white px-4 py-3 w-full mt-2 focus:outline-none focus:border-green-500 transition duration-300'
              />
            </div>
            <button
              type='submit'
              className='bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline transition duration-300'
            >
              SIGN IN
            </button>
          </form>
        </div>
      </LoginStyled>
    </>
  );
};

export default Login;
