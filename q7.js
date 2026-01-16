function getServer1speed(){
    console.log("Fetching speed from Server 1...");
    return new Promise((resolve)=>{
        setTimeout(()=>{
                         
            console.log("Speed from Server 1 received:");
            resolve(50);
        }, 2000);
    });
}

function getServer2Speed(){
    console.log("Fetching speed from Server 2...");
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("Speed from Server 2 received:");
            resolve(70);    
        }, 3000);
    });
}
getServer1speed()
.then(async (s1) => {
    console.log("Server 1 speed:", s1, "Mbps");
    const s2 = await getServer2Speed();
    console.log("Server 2 speed:", s2, "Mbps");
    let avgSpeed = (s1 + s2) / 2;
    console.log("Average Download Speed:", avgSpeed, "Mbps");
});