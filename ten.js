const wordCounter = (sentence) => {
    let wordMap = new Map();
    const wordsArray = sentence.split(/\s+/);

    for(const word of wordsArray){
        const words = word.toLowerCase().replace(',','');

        if(words.length>0) {
            wordMap.set(words, (wordMap.get(words)||0)+1);
        }
    }

    return wordMap;
};

const sentence = "please please submit your assignment on time, your assignments are important ";
const output = wordCounter(sentence);

console.log(output);