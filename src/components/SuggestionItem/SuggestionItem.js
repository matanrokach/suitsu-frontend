import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Label } from '../../styled-components';
import { getClothesIcons } from '../../assets/svgs/ClothesIcons';
import styles from './SuggestionItem.module.scss';

const ICON_WIDTH = 150;

const SuggestionItem = ({ item }) => {
	return (
		<div className={styles.item}>
			{getClothesIcons(ICON_WIDTH)[item]}
			<Label className={styles.itemLabel}>{item}</Label>
		</div>)
};

export default SuggestionItem;