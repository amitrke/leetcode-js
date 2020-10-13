/**
 * 3. Longest Substring Without Repeating Characters
 * 
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var inputAsArry = s.split('');
    var max = 0;
    for (var aPtr=0; aPtr<inputAsArry.length; aPtr++){
        var set = new Set();
        set.add(inputAsArry[aPtr]);
        for (var bPtr=aPtr+1; bPtr<inputAsArry.length; bPtr++){
            if (!set.has(inputAsArry[bPtr])){
                set.add(inputAsArry[bPtr]);
            } else {
                break;
            }
        }
        max = max > set.size ? max : set.size;
    }
    return max;
};

var testData = ["abccdefa", "", "a", "abcabcbb", "bbbbb", "pwwkew"];

for (var testStr of testData){
    var result = lengthOfLongestSubstring(testStr);
    console.log(`${testStr} - ${result}`);
}
