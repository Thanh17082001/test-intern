// Cấp độ dễ
    // Bài 1

var reverse = function(x) {
    const intMax = Math.pow(2, 31) - 1
    const intMin = -Math.pow(2, 31)

    const convertStr =  Math.abs(x).toString()

    const reverStr = convertStr.split('').reverse().join('');

    let result = x<0 ? -parseInt(reverStr) : parseInt(reverStr);

    if(result < intMin || result> intMax) {
        return 0
    }

    return result
};

    // Bài 2

var romanToInt = function(s) {
    const romanNumerals = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,

    };
   let result= 0
   let i=0
    while(i<s.length){
        const arrayNumber = []
        if(romanNumerals[s[i]] < romanNumerals[s[i+1]]){
             result += romanNumerals[s[i+1]] - romanNumerals[s[i]]
            i++;
        }
        else{
            result += romanNumerals[s[i]]

        }
        i++
    }
    return result
};

    //Bài 3
    # Write your MySQL query statement below
    SELECT e1.name AS Employee
    FROM Employee e1
    JOIN Employee e2 ON e1.managerId = e2.id
    WHERE e1.salary > e2.salary;

//Mức độ 2
    // Bài 1: chưa hoàn thành

    //Bài 2
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    const result = [];

   function backtrack(start, path) {
       if (start === s.length && path.length === 4) {
           result.push(path.join('.'));
           return;
       }

       for (let i = start; i < s.length; i++) {
           const segment = s.slice(start, i + 1);

           if (isValidSegment(segment)) {
               backtrack(i + 1, [...path, segment]);
           } else {
               break;
           }
       }
   }
   function isValidSegment(segment) {
       return parseInt(segment) >= 0 && parseInt(segment) <= 255 &&
              (segment.length === 1 || segment[0] !== '0'); 
   }

   backtrack(0, []);
   return result;

};

// Bài 3
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const words = s.trim().split(/\s+/);
   const reversedWords = words.reverse();
   const reversedString = reversedWords.join(' ');

   return reversedString;
};

// mức độ 3
 // Chưa hoàn thành 


    
