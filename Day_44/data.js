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
document.getElementById("datetime").innerHTML = dt.toLocaleDateString();
