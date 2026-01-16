// Simulated asynchronous function to get fuel level

function getFuelLevel(stage) {
    return new Promise((resolve) => {
        console.log(`Requesting fuel level: ${stage}`);

        setTimeout(() => {
            console.log(`⛽ Fuel data received for: ${stage}`);
            let fuel = stage === "before trip" ? 60 : 30; // in liters
            resolve(fuel);
        }, 2000);
    });
}

// Synchronous log
console.log("Calling getFuelLevel()...");

getFuelLevel("before trip")
.then((fuelBefore) => {
    console.log("Fuel BEFORE trip:", fuelBefore, "liters");

    console.log("Starting trip...");

    return getFuelLevel("after trip");
})
.then((fuelAfter) => {
    console.log("Fuel AFTER trip:", fuelAfter, "liters");

    let consumed = 60 - fuelAfter;
    console.log("Fuel consumed during trip:", consumed, "liters");
});

console.log("END OF PROGRAM (Synchronous code)");
