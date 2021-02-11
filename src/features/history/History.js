import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	fetchHistory,
	selectHistory,
	selectIsLoading,
} from '../history/historySlice';
import { Label, Table } from '../../styled-components';
import styles from './History.module.scss';

const History = (props) => {
	const dispatch = useDispatch();

	const history = useSelector(selectHistory);
	const isLoading = useSelector(selectIsLoading);

	console.log('history', history);

	useEffect(() => {
		dispatch(fetchHistory());
	}, []);

	if (isLoading) {
		return 'Loading history...';
	}

	const tableHeader = ['date', 'temp', 'weather', 'suggestion'];

	const rows = history;
	return (
		<div className={styles.container}>
			<Label>{'History'}</Label>

			<Table {...{
					header: tableHeader,
					data: rows,
				}}
			/>
		</div>
	);
};

export default History;
