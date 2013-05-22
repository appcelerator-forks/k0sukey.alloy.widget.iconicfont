function SSForecast(options) {
	switch (Ti.Platform.osname) {
		case 'iphone':
		case 'ipad':
			this.fontfamily = 'SS Forecast';
			break;
		case 'android':
			this.fontfamily = 'ss-forecast';
	}

	this.charcode = {
		'thermometer snowflake': '\uF20C',
		'empty thermometer day': '\uF20B',
		'thermometersnowflake': '\uF20C',
		'waning crescent moon': '\uD83C\uDF18',
		'waxing crescent moon': '\uD83C\uDF12',
		'emptythermometerday': '\uF20B',
		'freezing rain night': '\uF22A',
		'heavy freezing rain': '\uF228',
		'waxing gibbous moon': '\uD83C\uDF14',
		'mostly cloudy night': '\uF223',
		'waning gibbous moon': '\uD83C\uDF16',
		'thunderstorm night': '\uF24A',
		'medium thermometer': '\uF201',
		'first quarter moon': '\uD83C\uDF13',
		'waxingcrescentmoon': '\uD83C\uDF12',
		'waningcrescentmoon': '\uD83C\uDF18',
		'freezing rain day': '\uF229',
		'snowflake pellets': '\uF243',
		'mediumthermometer': '\uF201',
		'last quarter moon': '\uD83C\uDF17',
		'heavyfreezingrain': '\uF228',
		'mostly cloudy day': '\uF222',
		'thunderstormnight': '\uF24A',
		'freezingrainnight': '\uF22A',
		'empty thermometer': '\uF209',
		'waninggibbousmoon': '\uD83C\uDF16',
		'mostlycloudynight': '\uF223',
		'waxinggibbousmoon': '\uD83C\uDF14',
		'firstquartermoon': '\uD83C\uDF13',
		'thunderstorm day': '\uF249',
		'emptythermometer': '\uF209',
		'full thermometer': '\uF205',
		'snowflakepellets': '\uF243',
		'high thermometer': '\uF206',
		'low thermometer': '\uF208',
		'lastquartermoon': '\uD83C\uDF17',
		'lightning bolts': '\uF24E',
		'fullthermometer': '\uF205',
		'freezingrainday': '\uF229',
		'snowflake drops': '\uF242',
		'thermometer day': '\uF20A',
		'thunderstormday': '\uF249',
		'heavy rain snow': '\uF236',
		'highthermometer': '\uF206',
		'mostlycloudyday': '\uF222',
		'rain snow night': '\uF238',
		'snowflakedrops': '\uF242',
		'lightningbolts': '\uF24E',
		'thermometerday': '\uF20A',
		'lowthermometer': '\uF208',
		'shooting star': '\uD83C\uDF20',
		'rainsnownight': '\uF238',
		'crescent moon': '\uD83C\uDF19',
		'heavyrainsnow': '\uF236',
		'partly cloudy': '\u26C5',
		'freezing rain': '\uF227',
		'rain snow day': '\uF237',
		'shootingstar': '\uD83C\uDF20',
		'cloudy night': '\uF221',
		'freezingrain': '\uF227',
		'partly sunny': '\u26C5',
		'wind pellets': '\uF24D',
		'thunderstorm': '\u26C8',
		'crescentmoon': '\uD83C\uDF19',
		'partlycloudy': '\u26C5',
		'intermediate': '\uF391',
		'cloudynight': '\uF221',
		'temperature': '\uF201',
		'ice pellets': '\uF23A',
		'thermometer': '\uF201',
		'heavy sleet': '\uF23C',
		'windpellets': '\uF24D',
		'partlysunny': '\u26C5',
		'rainy night': '\uF226',
		'sleet night': '\uF23E',
		'medium snow': '\uF231',
		'double lift': '\uF381',
		'triple lift': '\uF382',
		'rainsnowday': '\uF237',
		'heavy snow': '\uF232',
		'heavy rain': '\u26C6',
		'rain drops': '\uF22B',
		'doublelift': '\uF381',
		'triplelift': '\uF382',
		'hail night': '\uF247',
		'heavy hail': '\uF245',
		'haze night': '\uF252',
		'ice pellet': '\uF239',
		'sleetnight': '\uF23E',
		'icepellets': '\uF23A',
		'mediumsnow': '\uF231',
		'snow night': '\uF234',
		'snowflakes': '\uF241',
		'cloudy day': '\u26C5',
		'rainynight': '\uF226',
		'heavysleet': '\uF23C',
		'rain drop': '\uD83D\uDCA7',
		'lightning': '\u2607',
		'hurricane': '\uD83C\uDF00',
		'cloudyday': '\u26C5',
		'mountains': '\u26F0',
		'wind rain': '\uF24B',
		'heavyrain': '\u26C6',
		'wind snow': '\uF24C',
		'hailnight': '\uF247',
		'full moon': '\uD83C\uDF15',
		'northwest': '\uF537',
		'southwest': '\uF535',
		'rainy day': '\uF225',
		'quad lift': '\uF383',
		'hazenight': '\uF252',
		'heavysnow': '\uF232',
		'southeast': '\uF533',
		'snownight': '\uF234',
		'rain snow': '\uF235',
		'fog night': '\uF254',
		'heavyhail': '\uF245',
		'sleet day': '\uF23D',
		'raindrops': '\uF22B',
		'difficult': '\uF392',
		'snowflake': '\u2744',
		'icepellet': '\uF239',
		'northeast': '\uF531',
		'umbrella': '\u2602',
		'sky lift': '\uD83D\uDEA1',
		'raindrop': '\uD83D\uDCA7',
		'lifttram': '\uD83D\uDEA1',
		'sleetday': '\uF23D',
		'quadlift': '\uF383',
		'fognight': '\uF254',
		'rainsnow': '\uF235',
		'droplets': '\uF22B',
		'snow day': '\uF233',
		'favorite': '\u22C6',
		'haze day': '\uF251',
		'rainyday': '\uF225',
		'fullmoon': '\uD83C\uDF15',
		'hail day': '\uF246',
		'windsnow': '\uF24C',
		'windrain': '\uF24B',
		'new moon': '\uD83C\uDF11',
		'hazeday': '\uF251',
		'newmoon': '\uD83C\uDF11',
		'droplet': '\uD83D\uDCA7',
		'pellets': '\uF23A',
		'fog day': '\uF253',
		'hailday': '\uF246',
		'warning': '\u26A0',
		'rainbow': '\uD83C\uDF08',
		'sunrise': '\uD83C\uDF05',
		'caution': '\u26A0',
		'skylift': '\uD83D\uDEA1',
		'tornado': '\uF213',
		'compass': '\uE671',
		'snowday': '\uF233',
		'fogday': '\uF253',
		'expert': '\uF393',
		'sunset': '\uD83C\uDF07',
		'clouds': '\uF220',
		'pellet': '\uF239',
		'cloudy': '\uF220',
		'stars': '\uE1B0',
		'north': '\uE671',
		'south': '\uF534',
		'smoke': '\uF255',
		'windy': '\uF212',
		'sunny': '\u2600',
		'clear': '\u2600',
		'sleet': '\uF23B',
		'rainy': '\u2614',
		'alert': '\u26A0',
		'rain  ': '\u2614',
		'cloud': '\u2601',
		'dust': '\uF248',
		'east': '\uF532',
		'moon': '\uD83C\uDF19',
		'drop': '\uD83D\uDCA7',
		'star': '\u22C6',
		'snow': '\uF231',
		'haze': '\uF250',
		'wind': '\uF212',
		'west': '\uF536',
		'hail': '\uF244',
		'easy': '\uF390',
		'ice': '\uF239',
		'fog': '\uF211',
		'sun': '\u2600'
	};
}

SSForecast.prototype.getCharcode = function(options) {
	return this.charcode[options];
};

module.exports = SSForecast;
