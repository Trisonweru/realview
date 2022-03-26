import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const FetchApi = async (url: string) => {
  const { data } = await axios.get(url, {
    headers: {
      'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
      'X-RapidAPI-Key': '3949e7b1e1msh1fd69b5bc711669p10804fjsn3c80dced4ab2',
    },
  });
  return data;
};
