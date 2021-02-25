import React from 'react';
import { Label, Row } from '../../styled-components';
import styles from './PageTitle.module.scss';

const PageTitle = ({ children }) => {
  return (
    <div className={styles.container}>
      <Label size={80}>{children}</Label>
    </div>
  );
};

export default PageTitle;
