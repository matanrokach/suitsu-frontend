import moment from 'moment';
import { getClothesIcons } from '../../assets/svgs/ClothesIcons';

const parseHistory = (rawHistoryRow) => {
	return Object.keys(rawHistoryRow).map(cell => {
		if (rawHistoryRow[cell].type === 'clothes') {
			return rawHistoryRow[cell].content.map(c => getClothesIcons(30)[c]);
		}
		if (rawHistoryRow[cell].type === 'date') {
			return moment(rawHistoryRow[cell].content).format('DD-MM-YYYY');
		}

		return rawHistoryRow[cell].content;
	})
}

export default {
	parseHistory,
};