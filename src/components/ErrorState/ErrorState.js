import React from 'react';
import { ReactComponent as AlertIcon } from '../../assets/svgs/alert.svg';
import { Label } from '../../styled-components';
import styles from './ErrorState.module.scss';

const ErrorState = ({ errorMessage }) => {
  return (
    <div className={styles.container}>
      <AlertIcon width={200} />
      <Label size={40} style={{ padding: 30 }}>
        {errorMessage}
      </Label>
    </div>
  );
};

export default ErrorState;
