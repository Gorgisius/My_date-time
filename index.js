import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import advancedFormat from 'dayjs/plugin/advancedFormat';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(advancedFormat);

const clock = document.getElementById("time");
const location = document.getElementById("location");
const date = document.getElementById("date");
const change_tz = document.getElementById("change_tz");
const ddcontent = document.getElementById("ddcontent");

ddcontent.addEventListener("click", (event)=>{
    const button = event.tartet.closest('.action');
    if (!button) return;

    dayjs.tz.setDefault(button.innerText);
    location.innerText = button.innerText;
});

change_tz.addEventListener("click", () =>{
    ddcontent.classList.toggle("hidden");
});

date.innerText = dayjs().format("D MMM, YYYY");
location.innerText = dayjs.tz.guess();

function UpdateTime(){
    clock.textContent = dayjs().format("HH:mm:ss");
}

setInterval(UpdateTime, 1000);
