let name = prompt("Adınız Nedir ?");
const systemName = document.querySelector(".name");
systemName.innerText = name;
var daysName = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
const systemDate = document.querySelector(".time");
const systemDay = document.querySelector(".day");
function getTime() {
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();
    let day = now.getDay();

    ekranaYaz(hour, minute, second, day);
}

function ekranaYaz(hour, minute, second, day) {

    systemDate.textContent= `${hour}:${minute}:${second}`;
    console.log(day);
    systemDay.textContent = daysName[day];
}
console.log(systemDay);
setInterval(function () {
    getTime();
}, 1000);