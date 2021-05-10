//import { it } from 'date-fns/locale';
import { formatDate } from '../date';

describe('formatDate', () => {
  it('check format', () => {
    expect(formatDate(1620654134061, 'yyyy')).toBe('2021');
  });
});
