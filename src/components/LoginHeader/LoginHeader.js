import React from 'react';
import { Input, Label, Row, Button, Text } from '../../styled-components';
import { ReactComponent as LockIcon } from '../../assets/svgs/padlock.svg';
import styles from './LoginHeader.module.scss';

const LoginHeader = ({ header }) => {
    return (
        <div className={styles.container}>
            <LockIcon width={40} />
            <Label size={40}>{header}</Label>
        </div>
    );
}

export default LoginHeader;