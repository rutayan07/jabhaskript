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
getFuelLevel("before trip").then((beforeTripFuel) => {
    console.log(`Fuel level before trip: ${beforeTripFuel} liters`);
    getFuelLevel("after trip").then((afterTripFuel) => {
        console.log(`Fuel level after trip: ${afterTripFuel} liters`);
        let fuelConsumed = beforeTripFuel - afterTripFuel;
        console.log(`Total fuel consumed during trip: ${fuelConsumed} liters`);
    });
});