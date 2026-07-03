import { Country, State } from 'country-state-city';

let cachedOptions = null;

export const getGlobalLocationOptions = () => {
  if (cachedOptions) return cachedOptions;

  const options = [];
  
  // Add all countries
  const countries = Country.getAllCountries();
  countries.forEach(country => {
    options.push({
      label: country.name,
      value: country.name
    });
  });

  // Add all states/provinces with their country name
  const states = State.getAllStates();
  states.forEach(state => {
    const countryName = Country.getCountryByCode(state.countryCode)?.name || "";
    if (countryName) {
      const label = `${state.name}, ${countryName}`;
      options.push({
        label: label,
        value: label
      });
    }
  });

  // Sort alphabetically
  options.sort((a, b) => a.label.localeCompare(b.label));

  cachedOptions = options;
  return options;
};
