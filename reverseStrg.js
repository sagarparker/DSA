function reverseStrg(revStrg){
    const strgArray = revStrg.split("");
    let reversedStrgArray = [];
    for(let i = 0 ; i = strgArray.length; i++){
        reversedStrgArray.push(strgArray.pop());
    }
    console.log(reversedStrgArray.join(""));
}

reverseStrg("Sagar Parker");