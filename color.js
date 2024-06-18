const colors = ['#f8deb8', '#f5cda2', '#f2b089', '#f5b97c', '#d9a774', '#b8835a'];
const btnColors = ['#f5cf95', '#f5b788', '#e3a770', '#d99852', '#b77d3a', '#946333']
const btn = document.getElementById('colorChanger')
const bodyColor = document.body;
const btnBckground = document.getElementById('colorChanger')

btn.addEventListener('click', function() {
    const randomNumber = getRandomNumber();
    bodyColor.style.backgroundColor = colors[randomNumber];
    btnBckground.style.backgroundColor = btnColors[randomNumber]
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}

