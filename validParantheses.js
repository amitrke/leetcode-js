/**
 * 20. Valid Parentheses
 * 
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var map = new Map();
    map.set(')','(');
    map.set(']', '[');
    map.set('}', '{');

    var stack = [];

    for (var i=0; i<s.length; i++){
        var c = s.charAt(i);
        if (map.has(c)){
            var popVal = stack.pop();
            if (map.get(c) == popVal){
                continue
            } else {
                return false;
            }
        } else {
            stack.push(c);
        }
    }

    return stack.length == 0 ? true : false;
};

var s = "{[]}";
var resp = isValid(s);

console.log(resp);