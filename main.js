const daily = document.querySelector("#daily");
const weekly = document.querySelector("#weekly");
const monthly = document.querySelector("#monthly");

const statistics = document.querySelectorAll(".statistic");
statistics.forEach(stat => stat.addEventListener("click", changeStatColor));

daily.addEventListener("click", changeStatistic);
weekly.addEventListener("click", changeStatistic);
monthly.addEventListener("click", changeStatistic);

function changeStatistic(event) {
    const day = document.querySelectorAll(".daily");
    const week = document.querySelectorAll(".weekly");
    const month = document.querySelectorAll(".monthly");

    daily.classList.remove("white");
    weekly.classList.remove("white");
    monthly.classList.remove("white");

    if (event.target === daily) {
        daily.classList.add("white");
        day.forEach(element => element.style.display = "block");
        week.forEach(element => element.style.display = "none");
        month.forEach(element => element.style.display = "none");
    } else if (event.target === weekly) {
        weekly.classList.add("white");
        day.forEach(element => element.style.display = "none");
        week.forEach(element => element.style.display = "block");
        month.forEach(element => element.style.display = "none");
    } else if (event.target === monthly) {
        monthly.classList.add("white");
        day.forEach(element => element.style.display = "none");
        week.forEach(element => element.style.display = "none");
        month.forEach(element => element.style.display = "block");
    }
}

function changeStatColor(event) {
    const work = document.querySelector(".work");
    const play = document.querySelector(".play");
    const study = document.querySelector(".study");
    const exercise = document.querySelector(".exercise");
    const social = document.querySelector(".social");
    const selfCare = document.querySelector(".self-care");

    work.classList.remove("statColor");
    play.classList.remove("statColor");
    study.classList.remove("statColor");
    exercise.classList.remove("statColor");
    social.classList.remove("statColor");
    selfCare.classList.remove("statColor");

    if (event.target === work){
        work.classList.add("statColor");
    } else if (event.target === play){
        play.classList.add("statColor");
    }else if (event.target === study){
        study.classList.add("statColor");
    }else if (event.target === exercise){
        exercise.classList.add("statColor");
    }else if (event.target === social){
        social.classList.add("statColor");
    }else if (event.target === selfCare){
        selfCare.classList.add("statColor");
    }
}