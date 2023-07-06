import { AJAX } from './helper.js';

// GET GEO CODE BY COORDINATES FROM GEOCODE.XYZ
export const getGeoCode = async function (workout) {
  try {
    const [lat, lng] = workout.coords;
    const data = await AJAX(
      `https://geocode.xyz/${lat},${lng}?geoit=json`,
      'Please try to reload the page again. Unfortunately, this api what I am using now can not read all datas at once and I am not willing to pay for the API. Error occurs from this reason.'
    );
    // console.log(data.osmtags);
    return data.osmtags.name;
  } catch (err) {
    console.error(err);
    return '';
  }
};

// GET WEATHER BY COORDINATES FROM OPEN WEATHER API
export const getWeatherData = async function (workout) {
  try {
    const myKey = '5c04291f0b2520cd23ea484f5b1e34e2';
    const [lat, lng] = workout.coords;

    const data = await AJAX(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${myKey}`,
      'Failed to load data from API'
    );

    const { icon } = data.weather[0];

    return `https://openweathermap.org/img/wn/${icon}@2x.png`;
  } catch (err) {
    console.error(err);
    return '';
  }
};
