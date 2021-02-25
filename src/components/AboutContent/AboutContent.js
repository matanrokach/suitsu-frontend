import React from 'react';
import { Label } from '../../styled-components';
import { ReactComponent as UmbrellaOpen } from '../../assets/svgs/umbrella-open.svg';
import styles from './AboutContent.module.scss';

const Strings = {
  TeasingQuestions: `What should I wear today? Will it be rainy today? Should I wear a sweater? Should I take an umbrella?`,
  Answers: `Are these questions ring a bell? Then you are in the right place!`,
};

const AboutContent = (props) => {
  return (
    <div className={styles.container}>
      <Label size={30} className={styles.subTitle}>
        {Strings.TeasingQuestions}
      </Label>
      <Label size={26}>{Strings.Answers}</Label>

      <div className={styles.imageContainer}>
        <UmbrellaOpen width={180} />
      </div>
    </div>
  );
};

export default AboutContent;
