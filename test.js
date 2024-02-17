function longestPalindrome(s) {
    if (s.length <= 1) {
        return s;
    }

    let start = 0;
    let maxLength = 1;

    function expandAroundCenter(left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            const currentLength = right - left + 1;
            if (currentLength > maxLength) {
                maxLength = currentLength;
                start = left;
            }
            left--;
            right++;
        }
    }

    for (let i = 0; i < s.length; i++) {
        // Odd length palindrome
        expandAroundCenter(i, i);
        
        // Even length palindrome
        expandAroundCenter(i, i + 1);
    }

    return s.slice(start, start + maxLength);
}

// Example usage
const inputString = "babad";
const result = longestPalindrome(inputString);
console.log(result);
