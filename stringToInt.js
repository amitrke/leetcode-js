/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    var foundSign=false;
    var foundDigit=false;
    var sign = 1;
    var result = 0;
    var filteredString = "";

    for (var cPtr=0; cPtr<s.length ; cPtr++){
        
        if (s[cPtr] == ' '){
            if (foundDigit || foundSign){
                break; 
            } else {
                continue;
            }
        }

        if (s[cPtr] == '.'){
            if (foundDigit && (s[cPtr-1] >= '0' && s[cPtr-1] <= '9')){
                break;
            }
            else {
                return 0;
            }
        }

        if (s[cPtr] == '+'){
            if (foundSign || foundDigit){
                break;
            } else {
                foundSign=true;
                continue;
            }
        }

        if (s[cPtr] == '-'){
            if (foundSign || foundDigit){
                break;
            } else {
                foundSign=true;
                sign = -1;
                continue;
            }
        }

        if (s[cPtr] >= '0' && s[cPtr] <= '9'){
            if (!foundDigit){
                foundDigit=true;
            }
            filteredString += s[cPtr];
            continue;
        }
        else {
            //Alphanumeric
            if (!foundDigit){
                return 0;
            } else {
                break;
            }
        }
    }

    if (!foundDigit){
        return 0;
    }

    result = sign * filteredString[filteredString.length-1];
    for (var cPtr=filteredString.length-2; cPtr>=0 ; cPtr--){
        var power = filteredString.length - cPtr;
        var tenRToPower = Math.pow(10, power-1);
        var currPowAbsVal = tenRToPower * filteredString[cPtr];
        if (sign > 0){
            result += currPowAbsVal;
            if (result > 2147483647){
                return 2147483647
            }
        } else {
            result -= currPowAbsVal;
            if (result < -2147483648){
                return -2147483648;
            }
        }
    }

    return result
};


var result = myAtoi("42");
console.log(result);

result = myAtoi("   -42");
console.log(result);

result = myAtoi("4193 with words");
console.log(result);

result = myAtoi("words and 987");
console.log(result);

result = myAtoi("-91283472332");
console.log(result);

result = myAtoi("3.14159");
console.log(result);

var result = myAtoi("");
console.log(result);

var result = myAtoi("00000-42a1234");
console.log(result);

var result = myAtoi("  -0012a42");
console.log(result);

var result = myAtoi("   +0 123");
console.log(result);