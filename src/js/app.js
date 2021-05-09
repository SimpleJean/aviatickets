import '../css/style.css';
import './plugins';
import locations from './store/locations';
import formUI from './view/form';
import currencyUI from './view/currency';
import ticketsUI from './view/tickets';

document.addEventListener('DOMContentLoaded', (e) => {
  const form = formUI.form;

  // Events
  initApp();
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    onFormSubmit();
  });

  // handlers
  async function initApp() {
    await locations.init();
    formUI.setAutocompleteData(locations.shortCities);
  }

  async function onFormSubmit() {
    const origin = locations.getCityCodeByKey(formUI.originValue);
    const destination = locations.getCityCodeByKey(formUI.destinationValue);
    const depart_date = formUI.departDateValue;
    const return_date = formUI.returnDateValue;
    const currency = currencyUI.currencyValue;

    await locations.fetchTickets({
      origin,
      destination,
      depart_date,
      return_date,
      currency,
    });

    console.log(locations.lastSearch);
    ticketsUI.renderTickets(locations.lastSearch);
  }
});
