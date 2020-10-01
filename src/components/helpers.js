export function countdown(){
    // Get the current year 
    let yr = new Date().getFullYear();
    // Check to see if the holiday has passed for this year, and if so then add 1 year
    if(+new Date().getTime() > new Date(`10/31/${yr}`).getTime()) { yr++ };
    // Calculate how much time is left before the holiday in milliseconds
    let timeDiffernce = +new Date(`10/31/${yr}`) - +new Date();
    // Convert milliseconds into usable time increments
    let timeLeft = {
        secs: Math.floor(timeDiffernce / 1000) % 60,
        mins: Math.floor((timeDiffernce / 1000) / 60) % 60,
        hours: Math.floor((timeDiffernce / 1000) / 3600) % 24,
        days: Math.floor(((timeDiffernce / 1000 )/ 3600) / 24)
    }
    // Return the time object with days, hours, mins, seconds info
    return timeLeft;
}  