function readMarks(examName, marks) {
    return new Promise((resolve, reject) => {

        console.log(`Fetching marks for ${examName}... ⏳`);

        setTimeout(() => {
            if (marks < 0) {
                reject(`Error: Invalid marks (${marks}) for ${examName}. Marks cannot be negative ❌`);
            } else {
                console.log(`${examName} marks received ✅`);
                resolve({m1: 45, m2: 50});
            }
        }, 2000);
    });
}


readMarks().then((data) => {
    let total = data.m1 + data.m2;
    console.log(`Total marks: ${total}`);
}).catch((error) => {
    console.error(error);
});