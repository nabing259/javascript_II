const uniqueCharactersCheck = (input)=>{
    const charSet = new Set();

    for(let char of input) {
        if(charSet.has(char)){
            console.log("The input String contains duplicates.");
            return false;
        }
        else {
            charSet.add(char);
        }
    }

    console.log("The input String has only unique characters.");
    return true;
};

uniqueCharactersCheck("Nabin");
uniqueCharactersCheck("nabin");