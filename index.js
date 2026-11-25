import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import MicroModal from 'micromodal';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(advancedFormat);

const clock = document.getElementById("time");
const location = document.getElementById("location")
const date = document.getElementById("date");
const button = document.getElementById("change_tz")

MicroModal.init();
// button.addEventListener("click", ()=>{
//     MicroModal.show('modal-1');
// })

const timeZoneName = dayjs.tz.guess()

date.innerText = dayjs().format("D MMM, YYYY")
location.innerText = timeZoneName;

function UpdateTime(){
    clock.textContent = dayjs().format("HH:mm:ss");
}

setInterval(UpdateTime, 1000);
