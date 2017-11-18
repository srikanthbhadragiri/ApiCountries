var api = {
  getCountries(region) {
    console.log('getCountries ...', region);
    var url = `https://restcountries.eu/rest/v2/region/${region}`;
    console.log(url);
    return fetch(url).then( (res) => res.json() );
  }
};

export default api;
