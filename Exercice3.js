
function isPalindrome(tableau1, tableau2) {
    if (tableau1.length != tableau2.length) {
        return false;
    }
    console.log(tableau1);
        console.log(tableau2);
    for (let index = 0; index < tableau1.length; index++) {
        
        if (tableau1[index] != tableau2[index]) {
            console.log("faux");
            return false;
        }
    }
    return true;
}

// let tableauEntiersString= toString(tableauEntiers);
let tab=['k','a','y','a','k','a'];
let tab2=tab.toReversed();

console.log(isPalindrome(tab, tab2));
