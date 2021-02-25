import React from 'react';
import moment from 'moment';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Label } from '../../../../styled-components';
import styles from './HistoryItem.module.scss';
import {
  getClothesIcons,
  clothesNames,
} from '../../../../assets/svgs/ClothesIcons';
import {
  getWeatherIcons,
  WeatherNames,
} from '../../../../assets/svgs/WeatherIcons';
import { Popover } from '../../../../components';
import { DateTimeFormats } from '../../../../constants';

const DateItem = ({ date }) => {
  return (
    <Label size={28}>{moment(date).format(DateTimeFormats.DateFormat)}</Label>
  );
};

const TempItem = ({ temp }) => {
  return <Label size={28}>{`${temp} °C`}</Label>;
};

const WeatherItem = ({ weather }) => {
  return (
    <Popover text={WeatherNames[weather]} style={{ padding: 1 }}>
      {getWeatherIcons(30)[weather]}
    </Popover>
  );
};

const SuggestionItem = ({ suggestion }) => {
  return suggestion?.map((c) => (
    <Popover text={clothesNames[c]} style={{ padding: 5 }}>
      {getClothesIcons(30)[c]}
    </Popover>
  ));
};

const HistoryItem = ({ children }) => {
  const { date, temp, weather, suggestion } = children;

  return (
    <Card style={{ marginTop: 4, marginBottom: 4 }} variant='outlined'>
      <CardContent>
        <Grid container justify='center' alignItems='center' direction='row'>
          <Grid item xs={4} md={3} className={styles.item}>
            <DateItem {...{ date }} />
          </Grid>
          <Grid item xs={4} md={3} className={styles.item}>
            <TempItem {...{ temp }} />
          </Grid>
          <Grid item xs={4} md={3} className={styles.item}>
            <WeatherItem {...{ weather }} />
          </Grid>
          <Grid item xs={12} md={3} className={styles.suggestionItem}>
            <SuggestionItem {...{ suggestion }} />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default HistoryItem;
