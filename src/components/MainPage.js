import React from 'react';
import { Link } from 'react-router-dom';

function MainPage() {
  return (
    <div className='container mx-auto text-center'>
      <h1 className='text-4xl font-bold mb-4'>Welcome to Note-Taking App</h1>
      <Link to='/signup' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Create Account</Link>
      <Link to='/login' className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-4'>Login</Link>
    </div>
  );
}

export default MainPage;