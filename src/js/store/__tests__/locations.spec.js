import locationsInstance, { Locations } from '../locations';
import { formatDate } from '../../helpers/date';
import api, { Api } from '../../services/apiService';
//import it from 'date-fns/esm/locale/it/index.js';
const countries = [{ code: 'UKR', name: 'Ukraine' }];
//import { it } from 'date-fns/locale';

describe('location store tests', () => {
  it('Check that locationsInstance is instance of location class', () => {
    expect(locationsInstance).toBeInstanceOf(Locations);
  });
  it('Success Locations instance create', () => {
    const instance = new Locations(api, { formatDate });
    expect(instance.countries).toBe(null);
    expect(instance.shortCities).toEqual({});
    expect(instance.formatDate).toEqual(formatDate);
  });

  it('Check correct countries serialize', () => {
    const res = locationsInstance.serializeCountries(countries);
    const expectedData = {
      UKR: { code: 'UKR', name: 'Ukraine' },
    };
    expect(res).toEqual(expectedData);
  });
});
