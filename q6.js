let entryTime;
function getEntryTime() {
    console.log("Fetching entry time...");

    setTimeout(() => {
         entryTime = 10;
        console.log("Entry time received:", entryTime + ":00 AM");
    }, 2000);
}


function getExitTime() {
    return new Promise((resolve) => {
        console.log("Fetching exit time...");

        setTimeout(() => {
            let exitTime = 2
            console.log("Exit time received:", exitTime + ":00 PM");
            resolve(exitTime);
        }, 3000);
    });
}

getEntryTime();

getExitTime().then((exitTime) => {

    setTimeout(() => {
        let totalHours = exitTime - entryTime;
        console.log("Total parked time:", totalHours, "hours");
    }, 100);
});
