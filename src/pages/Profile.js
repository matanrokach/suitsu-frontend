import React from 'react';
import { useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import { Label, Title } from '../styled-components';
import { selectUser } from '../features/auth/authSlice';
import { ReactComponent as ProfilePlaceholder } from '../assets/svgs/profile.svg';
import { ProfileDetails, PageTitle } from '../components';

const Strings = {
  Title: 'Profile',
};

const Profile = (props) => {
  return (
    <div>
      <PageTitle>{Strings.Title}</PageTitle>
      <ProfileDetails />
    </div>
  );
};

export default Profile;
