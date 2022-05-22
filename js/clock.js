let fullName = prompt("Adınız nedir?")
let myName = document.querySelector("#myName")
myName.innerHTML = `${myName.innerHTML} ${fullName}`

let aSaat = document.getElementById("myClock"); //aSaat adında bir değişken tanımladık.
function format(saatcek) {
let bSaat = saatcek.toString();
if (bSaat.length == 1) {
return "0" + bSaat;
} else {
return bSaat;
}
}
function saatGuncelleme() { //Burada bilgisayarımızdan saati çekiyoruz.
let tarih = new Date();
let saat = tarih.getHours(); //Burada saati çekiyoruz.
let dakika = tarih.getMinutes(); //Burada dakikayı çekiyoruz.
let saniye = tarih.getSeconds(); //Burada saniyeyi çekiyoruz.
let gunler= ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
aSaat.textContent = format(saat) + ":" + format(dakika) + ":" + format(saniye) + "  " + format(gunler[tarih.getDay()]);
}

setInterval(saatGuncelleme, 1000);