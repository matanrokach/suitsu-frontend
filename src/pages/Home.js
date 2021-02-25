import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/auth/authSlice';
import Suggestion from '../features/suggestion/Suggestion';
import History from '../features/history/History';

const Home = (props) => {
  const user = useSelector(selectUser);

  return (
    <>
      <Suggestion />
      <History />
    </>
  );
};

export default Home;
