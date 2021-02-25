import React from 'react';
import { Label } from '../../styled-components';
import { getClothesIcons, clothesNames } from '../../assets/svgs/ClothesIcons';
import styles from './SuggestionItem.module.scss';
import Grid from '@material-ui/core/Grid';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import media from '../../assets/style/media.module.scss'

const ICON_WIDTH_LARGE = 150;
const ICON_WIDTH_SMALL = 80;

const SuggestionItem = ({ item }) => {
	const isTablet = useMediaQuery(media.tablet);

	const iconWidth = isTablet ? ICON_WIDTH_SMALL : ICON_WIDTH_LARGE;

	return (
		<Grid item className={styles.item} xs={4} md={3} lg={2}>
			{getClothesIcons(iconWidth)[item]}
			<Label className={styles.itemLabel}>{clothesNames[item]}</Label>
		</Grid>)
};

export default SuggestionItem;