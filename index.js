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

// drop down button event listener
ddcontent.addEventListener("click", (event)=>{
    const button = event.target.closest('.action');
    if (!button) return;

    // change default time zone
    dayjs.tz.setDefault(button.innerText);
    // change location display text
    let temp = location.innerText;
    location.innerText = button.innerText;
    button.innerText = temp;

    UpdateTime();
    ddcontent.classList.toggle("hidden");
});

// Open dropdown
change_tz.addEventListener("click", () =>{
    ddcontent.classList.toggle("hidden");
});

// Set the initial time zone to the user's local zone
location.innerText = dayjs.tz.guess();
dayjs.tz.setDefault(location.innerText);

// Update time and date in the selected time zone
function UpdateTime(){
    const now = dayjs.tz();
    clock.textContent = now.format("HH:mm:ss");
    date.textContent = now.format("D MMM, YYYY");
}
UpdateTime();
setInterval(UpdateTime, 1000);
