import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	fetchHistory,
	selectHistory,
	selectIsLoading,
} from '../history/historySlice';
import { Label, Table, Title, Spinner } from '../../styled-components';
import styles from './History.module.scss';
import Grid from '@material-ui/core/Grid';
import moment from 'moment';
import { getClothesIcons, clothesNames } from '../../assets/svgs/ClothesIcons';
import { getWeatherIcons, WeatherNames } from '../../assets/svgs/WeatherIcons';
import { Popover } from '../../components';
import { DateTimeFormats, DataTypes } from '../../constants';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import HistoryItem from './components/HistoryItem/HistoryItem';

const Strings = {
	Title: 'History',
};

const History = (props) => {
	const dispatch = useDispatch();

	const history = useSelector(selectHistory);
	const isLoading = useSelector(selectIsLoading);

	console.log('history', history);

	useEffect(() => {
		dispatch(fetchHistory());
	}, []);

	if (isLoading) {
		return (
			<div className={styles.container}>
				<Spinner />
			</div>
		)
	}

	const tableHeader = ['date', 'temp', 'weather', 'suggestion'];

	const rows = history;
	return (
		<div className={styles.container}>
			<Title>{Strings.Title}</Title>

			<Grid container style={{ display: 'flex', flexDirection: 'column' }}>
				{rows.map(row => <HistoryItem>{row}</HistoryItem>)}
			</Grid>
		</div>
	);
};

export default History;
