import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchSuggestion,
  selectSuggestion,
  selectWeather,
  selectIsLoading,
} from '../suggestion/suggestionSlice';
import { Label, Spinner } from '../../styled-components';
import styles from './Suggestion.module.scss';
import { SuggestionItem } from '../../components';
import Status from './Status';
import Grid from '@material-ui/core/Grid';

const Strings = {
  Title: `That's what suits you today...`,
};

const Suggestion = (props) => {
  const dispatch = useDispatch();

  const suggestion = useSelector(selectSuggestion);
  const weather = useSelector(selectWeather);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchSuggestion());
  }, []);

  if (isLoading) {
    return (
      <div className={styles.container}>
        <Spinner />
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <Status {...{ weather }} />
      <Label size={35}>{Strings.Title}</Label>
      <Grid container className={styles.items}>
        {suggestion?.suggestion?.map((item) => (
          <SuggestionItem {...{ item }} />
        ))}
      </Grid>
    </div>
  );
};

export default Suggestion;
