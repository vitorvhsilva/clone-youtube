export const API_KEY = 'AIzaSyCeiugNC8d-pTGoR4ExseN2Us_XEX1OqiE';

export const value_converter = (value) => {
  if (value >= 1000000) {
    return Math.floor(value / 1000000)+'M'
  }
  else if (value >= 1000) {
    return Math.floor(value / 1000)+'K'
  }
  else {
    return value;
  }
}
