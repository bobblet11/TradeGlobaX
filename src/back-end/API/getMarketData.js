fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',{
  method:'GET',
  headers: {
      'Accept': 'application/json',
      'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Methods' : 'POST, PUT, PATCH, GET, DELETE, OPTIONS',
      'Access-Control-Allow-Headers' : '*',
      'X-CMC_PRO_API_KEY': '717d6948-4684-488c-b7a1-2cca131df220',
  }
}
)
.then((res) => {
  console.log(res)
  return res.json();
})
.then((data) => {
  console.log(data);
});