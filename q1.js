//Electricity consumption

function readmeter(){
    return new Promise((resolve) => {
        console.log("Reading meter values... please wait ⏳");    
        setTimeout(() => {
            console.log("Meter readings captured ✅");
            resolve({ old: 1200, current: 1350 }); // Example consumption value
        }, 2000);
    });
}

readmeter().then((data) => {
    console.log(`Cosumed units:`, data.current - data.old);
});