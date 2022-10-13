//---------- NAME---------------

let firstName = prompt("Lütfen İsminizi giriniz.");
let myName = document.querySelector("#myName");
myName.innerHTML = firstName;

//------------- CLOCK -----------

function dateClock() {
  let nowDate = new Date();
  let hours = nowDate.getUTCHours();
  let munite = nowDate.getUTCMinutes();
  let second = nowDate.getUTCSeconds();
  let days = nowDate.getDay();
  let gunler = [
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
  ];

  let myClock = document.querySelector("#myClock");
  myClock.innerHTML = `${hours} : ${munite} : ${second} ${gunler[days]} `;
}

setInterval(dateClock, 1000);
//1000 = 1sn
