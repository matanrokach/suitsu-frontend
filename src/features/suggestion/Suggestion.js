import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	fetchSuggestion,
	selectSuggestion,
	selectIsLoading,
} from '../suggestion/suggestionSlice';
import { Label } from '../../styled-components';
import ClothesIcons from '../../assets/svgs/ClothesIcons';
import styles from './Suggestion.module.scss';
import { SuggestionItem } from '../../components';

const Suggestion = (props) => {
	const dispatch = useDispatch();

	const suggestion = useSelector(selectSuggestion);
	const isLoading = useSelector(selectIsLoading);

	console.log('suggestion', suggestion);

	useEffect(() => {
		dispatch(fetchSuggestion());
	}, []);

	if (isLoading) {
		return 'Loading...';
	}

	return (
		<div className={styles.container}>
			<h1>{`That's what suits you today...`}</h1>
			<div className={styles.items}>
				{suggestion?.suggestion?.suggestion?.map((item) => <SuggestionItem {...{ item }} />)}
			</div>
		</div>
	);
};

export default Suggestion;
