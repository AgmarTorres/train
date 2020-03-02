// Complete the twoStrings function below.
function twoStrings(s1, s2) {
    for( let i = 0 ; i < s1.length ; i++ ){
       if(s2.includes(s1[i])){
           return 'YES'
       }
    }
   
    return 'NO'
}

function main() {

        s1 = "hi"
        s2 = 'world'

        let result = twoStrings(s1, s2);
    
}

main()