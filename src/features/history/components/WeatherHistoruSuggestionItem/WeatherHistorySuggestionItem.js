import React, { useEffect } from 'react';
import { Label } from '../../styled-components';
import { getClothesIcons } from '../../../../assets/svgs/ClothesIcons';
import styles from './HistorySuggestionItem.module.scss';

const ICON_WIDTH = 150;

const HistorySuggestionItem = ({ item }) => {
	return (
		<div className={styles.item}>
			{getClothesIcons(ICON_WIDTH)[item]}
			<Label className={styles.itemLabel}>{item}</Label>
		</div>)
};

export default HistorySuggestionItem;