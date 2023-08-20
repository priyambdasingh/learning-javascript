var isAnagram = function (string1,string2){
    if(string1.length != string2.length){
        return false;
    }
    let counter={}
    for (let letters of string1){
        counter[letters]=(counter[letters]||0+1)
    }
    for(let items of string2){
        if(!counter[items]){
            return false;
        }
       counter [items]-=1
    }
    return true;

};
const check = isAnagram("cat","tac")
console.log(check)