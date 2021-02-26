import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchHistory,
  selectHistory,
  selectIsLoading,
  selectError,
} from '../history/historySlice';
import { Label, Table, Title, Spinner } from '../../styled-components';
import styles from './History.module.scss';
import Grid from '@material-ui/core/Grid';
import HistoryItem from './components/HistoryItem/HistoryItem';
import { ErrorState } from '../../components';

const Strings = {
  Title: 'History',
};

const History = (props) => {
  const dispatch = useDispatch();

  const history = useSelector(selectHistory);
  const isLoading = useSelector(selectIsLoading);
  const errorMessage = useSelector(selectError);

  console.log('history', history);

  useEffect(() => {
    dispatch(fetchHistory());
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

  const rows = history;
  return (
    <div className={styles.container}>
      <Title>{Strings.Title}</Title>

      <Grid container style={{ display: 'flex', flexDirection: 'column' }}>
        {rows.map((row) => (
          <HistoryItem>{row}</HistoryItem>
        ))}
      </Grid>
    </div>
  );
};

export default History;
