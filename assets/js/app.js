const profileDataArgs = process.argv.slice(2, process.argv.length);
console.log(profileDataArgs);


const printProfileData = profileDataArr => {
    // 9.1.6 added += 1 at the end of for loop
    // This..
    for (let i = 0; i < profileDataArr.length; i += 1) {
        console.log(profileDataArr[i]);
    }

    console.log('==============');

    // Is the same as this...

    // profileDataArr.forEach((profileItem) => {
        //console.log(profileItem)
    //});
    
    // Updated code below to use arrow function 
    profileDataArr.forEach(profileItem => console.log(profileItem));
};

printProfileData(profileDataArgs);