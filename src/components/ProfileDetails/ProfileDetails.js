import React from 'react';
import { useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import { Label, Title } from '../../styled-components';
import { selectUser } from '../../features/auth/authSlice';
import { ReactComponent as ProfilePlaceholder } from '../../assets/svgs/profile.svg';
import { Colors } from '../../constants';
import styles from './ProfileDetails.module.scss';

const ProfileDetails = ({}) => {
  const user = useSelector(selectUser);

  return (
    <Grid container direction='row' justify='center' alignItems='flex-end'>
      <Grid item xs={12} md={6}>
        <div className={styles.pictureContainer}>
          <ProfilePlaceholder width={250} fill={Colors.Grey} />
        </div>
      </Grid>

      <Grid item xs={12} md={6}>
        <div className={styles.detailsContainer}>
          <div className={styles.textContainer}>
            <Label>{`Name: ${user.name}`}</Label>
            <Label>{`Email: ${user.email}`}</Label>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default ProfileDetails;
