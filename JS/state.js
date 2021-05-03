let currentTime = new Date();
let year = currentTime.getFullYear();
let month = currentTime.getMonth() + 1;
let date = currentTime.getDate() - 1;
if (date == 0) {
    month -= 1;
    if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) date = 31;
    else if (month == 2) {
        if (year % 400 == 0 || (yaer % 4 == 0 && year % 100 != 0)) { date = 29; } else { date = 28; }
    } else date = 30;
}
if (month == 0) {
    month = 30;
    date = 31;
    year -= 1;
}
if (month < 10) month = '0' + month;
if (date < 10) date = '0' + date;


const currdate = `${year}-${month}-${date}`
const stateUrl = `https://api.covid19api.com/live/country/india/status/confirmed/date/${currdate}T00:00:00Z`

let h2 = document.querySelector('.text').children[1];
h2.textContent = `As on ${currdate}`;

const Container = document.querySelector('.Container');
fetch(stateUrl).then((cases) => {
    return cases.text()
}).then((data) => {
    const array = JSON.parse(data);
    array.forEach(element => {
        const state = document.createElement('div');
        state.classList.add('state');
        state.innerHTML = `<h2 class="Province">${element.Province}</h2>
        <h2 class="Confirmed">${element.Confirmed}</h2>
        <h2 class="Recovered">${element.Recovered}</h2>
        <h2 class="Active">${element.Active}</h2>
        <h2 class="Deaths">${element.Deaths}</h2>`
        Container.appendChild(state);
    })
});


const search = () => {
    let value = document.querySelector('.search').value.toLowerCase();

    let state = document.querySelector('.Container').getElementsByTagName('div');
    console.log(state);
    for (let i = 1; i < state.length; i++) {
        let statename = state[i].getElementsByTagName('h2')[0].textContent.toLowerCase();
        console.log(statename.indexOf(value));
        if (statename.indexOf(value) > -1) state[i].style.display = '';
        else state[i].style.display = 'none';
    }
}