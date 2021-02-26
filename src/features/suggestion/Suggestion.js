import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import {
  fetchSuggestion,
  selectSuggestion,
  selectWeather,
  selectIsLoading,
  selectError,
} from '../suggestion/suggestionSlice';
import { Label, Spinner } from '../../styled-components';
import styles from './Suggestion.module.scss';
import { SuggestionItem } from '../../components';
import Status from './Status';
import { ErrorState } from '../../components';

const Strings = {
  Title: `That's what suits you today...`,
};

const Suggestion = (props) => {
  const dispatch = useDispatch();

  const suggestion = useSelector(selectSuggestion);
  const weather = useSelector(selectWeather);
  const isLoading = useSelector(selectIsLoading);
  const errorMessage = useSelector(selectError);

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

  if (errorMessage) {
    return (
      <ErrorState {...{ errorMessage }} />
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
