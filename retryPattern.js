async function retry(){
    let currentTry = 0;

    while(currentTry<5){
        try {
            externalCall();
            console.log("Success")
            break;
        } catch (error) {
            currentTry++;
            console.log(`Failure ${currentTry}`)
            
        }
        await sleep(3000)
    }
}

//For time delay between 2 calls
async function sleep(ms){
    return new Promise(resolve => {
        setTimeout(()=>{
            resolve()
        }, ms)
    })
}

function externalCall(){

    // throw new Error("Fail")
    return true;
}

retry();