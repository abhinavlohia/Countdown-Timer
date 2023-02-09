//Showing the end date
const endDate = "01 August 2028 12:00 AM";
document.getElementById("end_date").innerText = endDate;
const input = document.querySelectorAll("input");


//creating clock function
function clock() {
    const end = new Date(endDate);
    const now = new Date();
    const diff = (end - now) / 1000;//in seconds
    if(diff < 0) 
    {
        // alert("End date should be ahead of the current date");
        return;
    }

    const days = (diff / 3600 / 24);
    const hours = (diff / 3600) % 24;
    const minutes = (diff / 60) % 60;
    const seconds = diff % 60;

    input[0].value = Math.floor(days);
    input[1].value = Math.floor(hours);
    input[2].value = Math.floor(minutes);
    input[3].value = Math.floor(seconds);
}

setInterval(clock,1000);
