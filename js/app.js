const nodeDays = window.document.getElementById("days")
const nodeHours = window.document.getElementById("hours")
const nodeMinutes = window.document.getElementById("minutes")
const nodeSeconds = window.document.getElementById("seconds")

function renderDateInDom(date, hour) {
    nodeDays.textContent = date.split('/')[0]
    nodeHours.textContent = hour.split(':')[0]
    nodeMinutes.textContent = hour.split(':')[1]
    nodeSeconds.textContent = hour.split(':')[2]
}

function updateDate() {
    const currentDate = new Date().toLocaleString();
    const [date, hour] = currentDate.split(' ');
    renderDateInDom(date, hour);
}

window.setInterval(() => {
    updateDate() 
}, 1000);