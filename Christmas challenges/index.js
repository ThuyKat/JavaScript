const hackedEmojis = {
    "angry":            "🎁",   // 😠
    "thumbsdown":       "👏",   // 👎  
    "man_facepalming":  "🎅",   // 🤦‍♂️
    "cry":              "‍😄",   // 😭
    "puke":             "🤩"    // 🤮
}

function emojifyWord(word){
    if(word.startsWith(':')&& word.endsWith(':')){
        const trimmedWord = word.split(':')[1];
        if(Object.keys(hackedEmojis).includes(trimmedWord)){
            return hackedEmojis[trimmedWord];
        }
    }
    return word;
}

console.log(emojifyWord(":angry:"));


function emojifyPhrase(phrase){
    // get a list of words from the phrase
    const phraseArr = phrase.split(" ");
    // iterate through phraseArr and map emojifyWord to hackedEmojis if found
    const transformedPhraseArr = phraseArr.map(emojifyWord);
    
    return transformedPhraseArr.join(" ");
}

console.log(emojifyPhrase("Those shoes :puke:"));
