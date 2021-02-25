import React from 'react';
import { Label } from '../../../../styled-components';
import styles from './HistoryItem.module.scss';
import moment from 'moment';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { getClothesIcons, clothesNames } from '../../../../assets/svgs/ClothesIcons';
import { getWeatherIcons, WeatherNames } from '../../../../assets/svgs/WeatherIcons';
import { Popover } from '../../../../components';
import { DateTimeFormats, DataTypes } from '../../../../constants';

const HistoryItem = ({ children }) => {
    return (
        <Card style={{ marginTop: 4, marginBottom: 4 }} variant="outlined">
            <CardContent>
                <Grid container justify="center"
  alignItems="center"
  direction="row"
>
                    <Grid item xs={4} md={3} className={styles.item}><Label size={28}>{moment(children.date).format(DateTimeFormats.DateFormat)}</Label></Grid>
                    <Grid item xs={4} md={3} className={styles.item}><Label size={28}>{`${children.temp} °C`}</Label></Grid>
                    <Grid item xs={4} md={3} className={styles.item}><Popover text={children.weather} style={{ padding: 1 }}>{getWeatherIcons(30)[children.weather]}</Popover></Grid>
                    <Grid item xs={12} md={3} className={styles.suggestionItem}>{children.suggestion?.map(c => (<Popover text={clothesNames[c]} style={{ padding: 5 }}>{getClothesIcons(30)[c]}</Popover>))}</Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default HistoryItem;