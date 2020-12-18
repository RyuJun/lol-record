import axios from 'axios';
import Config from '../shared/config';

export const fetch = (path) => {
  const axiosOptions = {
    method: 'GET',
    url: Config.BASE_URL + path,
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    params,
  };
  axiosOptions.headers['X-Riot-Token'] = Config.X_RIOT_TOKEN;

  return axios(axiosOptions);
};
