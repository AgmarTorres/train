// Complete the alternatingCharacters function below.
function alternatingCharacters(s) {
    var del = 0
    for ( let i = 0 ; i < s.length ; i ++){
        if(s[i] == s[i+1]){
            del++
        }
    }
    return del
}

function main() {
  s = "AAAA";
  let result = alternatingCharacters(s);
  console.log(result)
}

main();
