const stateUrl = `https://api.covid19api.com/total/country/india`

const Container = document.querySelector('.container');
fetch(stateUrl).then((cases) => {
    return cases.text()
}).then((data) => {
    const a = JSON.parse(data);
    let array = a[a.length - 1];
    let confirmed = document.querySelector('.confirmed');
    let recovered = document.querySelector('.recovered');
    let active = document.querySelector('.active');
    let deaths = document.querySelector('.deaths');
    confirmed.textContent = `Confirmed: ${array.Confirmed}`
    recovered.textContent = `Recovered: ${array.Recovered}`
    active.textContent = `Active: ${array.Active}`
    deaths.textContent = `Deaths: ${array.Deaths}`
});