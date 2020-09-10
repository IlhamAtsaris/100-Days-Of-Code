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

fetch("https://api.thevirustracker.com/free-api?countryTotal=ID")
  .then((response) => response.json())
  .then((response) => {
    const data = response.countrydata;
    const total_cases = data[0].total_cases;
    const total_sembuh = data[0].total_recovered;
    const total_death = data[0].total_deaths;
    const new_cases = data[0].total_new_cases_today;
    const new_death = data[0].total_new_deaths_today;

    document.querySelector(".cases").innerHTML = total_cases;
    document.querySelector(".kasus_baru").innerHTML = new_cases;
    document.querySelector(".sembuh").innerHTML = total_sembuh;
    document.querySelector(".meninggal").innerHTML = total_death;
    document.querySelector(".baru").innerHTML = new_death;
  })
  .catch((error) => {
    alert(error);
  });

fetch(
  "http://newsapi.org/v2/top-headlines?country=id&category=health&apiKey=77f6f07d2af34d22b0e3c00f65c85587"
)
  .then((response) => {
    return response.json();
  })
  .then((responseJson) => {
    console.log(responseJson);
  });
// let cards = "";
// data.forEach((a) => {
//   cards += ` <div class="card">
//               <img class="card-img-top m-0" src="img/pusat-sebaran.jpg" alt="Card image cap" />
//               <div class="card-body">
//                 <h5 class="card-title">
//                   Tangerang Jadi Pusat Sebaran Covid-19 di Banten
//                 </h5>
//                 <p class="card-text">
//                   This is a longer card with supporting text below as a
//                   natural lead-in to additional content. This content is a
//                   little bit longer.
//                 </p>
//                 <p class="card-text">
//                   <small class="text-muted">Last updated 3 mins ago</small>
//                 </p>
//               </div>
//             </div>`;

//   document.querySelector(".article-container").innerHTML = cards;
// });
