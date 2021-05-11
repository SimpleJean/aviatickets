import api from '../apiService';
import config from '../../config/apiConfig';
import axios from 'axios';

jest.mock('axios');

const cities = [{ country_code: 'UKR', name: 'Kharkiv', code: 'KH' }];

describe('test api service', () => {
  it('Success fetch cities', async () => {
    axios.get.mockImplementationOnce(() => Promise.resolve({ data: cities }));
    await expect(api.cities()).resolves.toEqual(cities);
    expect(axios.get).toHaveBeenCalledWith(`${config.url}/cities`);
  });
  it('Fetch cities fail', async () => {
    const errMsg = 'Api error';
    axios.get.mockImplementationOnce(() => Promise.reject(new Error(errMsg)));
    await expect(api.cities()).rejects.toThrow(errMsg);
  });
});
