import moment from 'moment';
import { getClothesIcons, clothesNames } from '../../assets/svgs/ClothesIcons';
import { Popover } from '../../components';

const parseHistory = (rawHistoryRow) => {
	return Object.keys(rawHistoryRow).map(cell => {
		if (rawHistoryRow[cell].type === 'clothes') {
			return rawHistoryRow[cell].content.map(c => (<Popover text={clothesNames[c]} style={{ padding: 5 }}>{getClothesIcons(30)[c]}</Popover>));
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