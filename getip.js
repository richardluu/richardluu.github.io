
$.getJSON('https://api.ipify.org?format=json', function(data) {
  console.log(JSON.stringify(data, null, 2));
  document.getElementById('myip').innerHTML= JSON.stringify(data, null, 2);
});

