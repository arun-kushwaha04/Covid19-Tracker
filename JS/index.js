// let currentTime = new Date();
// let month = currentTime.getMonth() + 1;
// if (month < 10) month = '0' + month;
// let date = currentTime.getDate();
// if (date < 10) date = '0' + date;

// const currdate = `${currentTime.getFullYear()}-${month}-${date}`
// const currdate = `2021-04-30`;
const stateUrl = `https://api.covid19api.com/live/country/india/status/confirmed/date/2021-05-01T00:00:00Z`

console.log(stateUrl);


const Container = document.querySelector('.Container');
fetch(stateUrl).then((cases) => {
    return cases.text()
}).then((data) => {
    const array = JSON.parse(data);
    console.log(array);

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