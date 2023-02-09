const temp = document.querySelector("#temp").innerHTML;
const windspeed = document.querySelector("#windspeed").innerHTML;
let windChillFahrenheit = document.querySelector("#windChillFahrenheit");

if (temp <= 50 && windspeed > 3.0) {
    let windChillFahrenheit = 35.74 + (0.6215 * temp) - (35.75 * windspeed ** 0.16) + (0.4275 * temp * windspeed ** 0.16);

    windChillFahrenheit = windChillFahrenheit.toFixed(2);

    document.querySelector("#windChillFahrenheit").innerHTML = windChillFahrenheit;
}
else {
    document.querySelector("#windChillFahrenheit").textContent = "N/A";
}
