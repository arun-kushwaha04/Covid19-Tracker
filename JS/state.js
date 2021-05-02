let currentTime = new Date();
let month = currentTime.getMonth() + 1;
if (month < 10) month = '0' + month;
let date = currentTime.getDate() - 1;
if (date < 10) date = '0' + date;

const currdate = `${currentTime.getFullYear()}-${month}-${date}`
const stateUrl = `https://api.covid19api.com/live/country/india/status/confirmed/date/${currdate}T00:00:00Z`

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