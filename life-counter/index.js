let isDOBopen = false;
let date;
const settingContent = document.getElementById("setting-content");
const setIcon = document.getElementById("set-icon");
const initialText = document.getElementById("initial-text");
const afterText = document.getElementById("after-text");
const dobBtn = document.getElementById("btn");
const setDOBDate = document.getElementById("set-date");

const Year = document.getElementById("years");
const Month = document.getElementById("months");
const Day = document.getElementById("days");
const Hour = document.getElementById("hours");
const Menute = document.getElementById("minutes");
const Seconds = document.getElementById("seconds");

const makeTwoDigitNumber = (number) => {
  return number > 9 ? number : `0${number}`;
};

const Toggle = () => {
  if (isDOBopen) {
    settingContent.classList.add("hide");
  } else {
    settingContent.classList.remove("hide");
  }
  isDOBopen = !isDOBopen;
  // console.log("toggle", isDOBopen);
};

const Ageupdate = () => {
  const currentDate = new Date();
  const diff = currentDate - date;

  const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
  const months = Math.floor((diff / (1000 * 60 * 60 * 24 * 365)) % 12);
  const days = Math.floor(diff / (1000 * 60 * 60 * 24)) % 30;
  const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
  const minutes = Math.floor(diff / (1000 * 60)) % 60;
  const seconds = Math.floor((diff / 1000) % 60);

  // console.log(years, months, days, hours, minutes, seconds);
  Year.innerHTML = makeTwoDigitNumber(years);
  Month.innerHTML = makeTwoDigitNumber(months);
  Day.innerHTML = makeTwoDigitNumber(days);
  Hour.innerHTML = makeTwoDigitNumber(hours);
  Menute.innerHTML = makeTwoDigitNumber(minutes);
  Seconds.innerHTML = makeTwoDigitNumber(seconds);

  // console.log(Math.floor(diff / 1000%60))
};

const localStorageGetter = () => {
  const year = localStorage.getItem("year");
  const month = localStorage.getItem("month");
  const dates = localStorage.getItem("dates");
  const hour = localStorage.getItem("hour");
  const minute = localStorage.getItem("minute");
  const seconds = localStorage.getItem("seconds");

  if (year && month && dates) {
    date = new Date(year, month, dates,hour,minute,seconds);
    // console.log(date)
  }


  Ageupdate();
};

const Toggler = () => {
    Ageupdate();
  if (date) {
    initialText.classList.add("hide");
    afterText.classList.remove("hide");
  } else {
    afterText.classList.add("hide");
    initialText.classList.remove("hide");
  }
};

const dateHandler = () => {
  const dateString = setDOBDate.value;
  
   let timerId =null
  date = dateString ? new Date(dateString) : null;


  if (date) {
    localStorage.setItem("year", date.getFullYear());
    localStorage.setItem("month", date.getMonth());
    localStorage.setItem("dates", date.getDate());

    localStorage.setItem("hour", date.getHours());
    localStorage.setItem("minute", date.getMinutes());
    localStorage.setItem("seconds", date.getSeconds());
    
    timerId = setInterval(() => Ageupdate(), 1000);
  }
  
    else{
     timerId && clearInterval(timerId);
      localStorage.clear();
     
  
    }
  
    Toggler();
  
  
};

localStorageGetter();
Toggler();

dobBtn.addEventListener("click", dateHandler);
setIcon.addEventListener("click", Toggle);
