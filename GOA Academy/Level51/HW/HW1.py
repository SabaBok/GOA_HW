#1)https://www.codewars.com/kata/60fb2e158b940b00191e24fb
def number_of_duplicate_digits(ndigit):
    def dp(pos, isDouble, lastDigit):
        if pos == ndigit:
            return 1 if isDouble else 0
        
        if (pos, isDouble, lastDigit) in memo:
            return memo[(pos, isDouble, lastDigit)]
        
        start = 1 if pos == 0 else 0 
        result = 0
        for digit in range(start, 10):
            result += dp(
                pos + 1,
                isDouble or (digit == lastDigit),
                digit
            )
        
        memo[(pos, isDouble, lastDigit)] = result
        return result
    
    memo = {}
    return dp(0, 0, -1)