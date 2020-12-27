const newYears = '1st Jan 2021'
function countdown () {
    const newYearsDate = new Date (newYears);
    const currentDate = new Date ();

    console.log(newYearsDate - currentDate);

}

countdown ();

setInterval(countdown, 1000);