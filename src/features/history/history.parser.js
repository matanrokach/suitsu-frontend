import moment from 'moment';
import { getClothesIcons, clothesNames } from '../../assets/svgs/ClothesIcons';
import { getWeatherIcons, WeatherNames } from '../../assets/svgs/WeatherIcons';
import { Popover } from '../../components';
import { Label } from '../../styled-components';
import { DateTimeFormats, DataTypes } from '../../constants';

const parseHistory = (rawHistoryRow) => {
	return rawHistoryRow;
	return Object.keys(rawHistoryRow).map(cell => {
		if (cell === DataTypes.Suggestion) {
			return rawHistoryRow[cell].map(c => (<Popover text={clothesNames[c]} style={{ padding: 5 }}>{getClothesIcons(30)[c]}</Popover>));
		}
		if (cell === DataTypes.Weather) {
			const c = rawHistoryRow[cell];
			return (<Popover text={WeatherNames[c]} style={{ padding: 1 }}>{getWeatherIcons(30)[c]}</Popover>);
		}
		if (cell === DataTypes.Date) {
			return <Label size={28}>{moment(rawHistoryRow[cell]).format(DateTimeFormats.DateFormat)}</Label>;
		}
		if (cell === DataTypes.Temp) {
			return <Label size={28}>{`${rawHistoryRow[cell]} °C`}</Label>;
		}

		return rawHistoryRow[cell];
	})
}

export default {
	parseHistory,
};