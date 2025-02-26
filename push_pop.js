//push: aniade un elememto al final del array
const countries = ['Finland', 'Sweden', 'Norway'];
const newCountries = countries.push('Denmark');

console.log(countries); // ['Finland', 'Sweden', 'Norway', 'Denmark']
console.log(newCountries); // 4

//pop: elimina el ultimo elemento del array
const removeCountry = countries.pop();
console.log(countries); // ['Finland', 'Sweden', 'Norway', 'Denmark']
console.log(removeCountry); // Denmark