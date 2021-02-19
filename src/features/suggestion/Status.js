import React from 'react';
import moment from 'moment';
import { getWeatherIcons, WeatherNames } from '../../assets/svgs/WeatherIcons';
import { Popover } from '../../components';
import { Label } from '../../styled-components';
import { DateTimeFormats } from '../../constants';

const Date = ({ date }) => {
	if (!date) {
		return null;
	}

	return <Label size={58}>{moment(date).format(DateTimeFormats.DateFormat)}</Label>;
};

const Weather = ({ weather }) => {
	if (!weather) {
		return null;
	}

	return (
		<Popover text={WeatherNames[weather]} style={{ padding: 1 }}>
			{getWeatherIcons(200)[weather]}
		</Popover>
	);
};

const Temp = ({ temp }) => {
	if (!temp) {
		return null;
	}

	return <Label size={38}>{`${temp} °C`}</Label>;
}

const CurrentWeather = ({ weather, temp }) => {
	if (!weather && !temp) {
		return null;
	}

	return (
		<div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end' }}>
			<Weather {...{ weather }} />

			<Temp {...{ temp }} />
		</div>
	);
};

const Status = ({ weather: suggestionWeather }) => {
	console.log('suggestionWeather', suggestionWeather);
	const { date, temp, weather } = suggestionWeather;
	return (
		<>
			<CurrentWeather {...{ weather, temp }} />
			<Date {...{ date }} />
		</>
	);
};

export default Status;
