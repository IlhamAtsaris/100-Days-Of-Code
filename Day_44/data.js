fetch("https://indonesia-covid-19.mathdro.id/api/provinsi/")
  .then((response) => response.json())
  .then((response) => {
    const data = response.data;
    const kasuspositif = data[12].kasusPosi;
    const provinsi = data[12].provinsi;
    const sembuh = data[12].kasusSemb;
    const meninggal = data[12].kasusMeni;

    document.querySelector(".kasus-positif").innerHTML = kasuspositif;
    document.querySelector(".provinsi").innerHTML = provinsi;
    document.querySelector(".selesai-sembuh").innerHTML = sembuh;
    document.querySelector(".kasus-meninggal").innerHTML = meninggal;
  });

const dt = new Date();
document.querySelector(".datetime").innerHTML = dt.toLocaleDateString();
document.getElementById("time").innerHTML = dt.toLocaleDateString();

fetch("https://api.thevirustracker.com/free-api?countryTotal=ID")
  .then((response) => response.json())
  .then((response) => {
    const data = response.countrydata;
    const total_cases = data[0].total_cases;
    const total_sembuh = data[0].total_recovered;
    const total_death = data[0].total_deaths;
    const new_cases = data[0].total_new_cases_today;
    const new_death = data[0].total_new_deaths_today;
    const aktif = data[0].total_active_cases;

    document.querySelector(".cases").innerHTML = total_cases;
    document.querySelector(".kasus_baru").innerHTML = new_cases;
    document.querySelector(".sembuh").innerHTML = total_sembuh;
    document.querySelector(".meninggal").innerHTML = total_death;
    document.querySelector(".baru").innerHTML = new_death;
  });
