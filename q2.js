function readBalance(){
    return new Promise((resolve) => {
        console.log("Fetching banl balance... please wait ⏳");

        setTimeout(() => {
            console.log("Balance fetched ✅");
            resolve({before: 5000, withdrawn: 2000}); 
        }, 2000)
    })
}

readBalance().then((data) => {
    let afterBalance = data.before - data.withdrawn;
    console.log("Balance before withdrawal:", data.before);
    console.log("Amount withdrawn:", data.withdrawn);
    console.log("Balance after withdrawal:", afterBalance);
});