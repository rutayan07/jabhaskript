function readSensor(){
    return new Promise((resolve) => {
        console.log("Reading sensor values... please wait ⏳");
        setTimeout(() => {
            console.log("Sensor readings captured");
            resolve({ temperature: 25, humidity: 60 }); 
        }, 2000);
    });
}

readSensor().then((data) => {
    console.log("Temperature:", data.temperature + "°C");
    console.log("Humidity:", data.humidity + "%");
});