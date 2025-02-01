#7)https://www.codewars.com/kata/52223df9e8f98c7aa7000062
def rot13(message):
    result = []
    lower_case = "abcdefghijklmnopqrstuvwxyz"
    upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    
    for char in message:
        if char in lower_case:  # If the character is a lowercase letter
            index = lower_case.index(char)
            result.append(lower_case[(index + 13) % 26])
        elif char in upper_case:  # If the character is an uppercase letter
            index = upper_case.index(char)
            result.append(upper_case[(index + 13) % 26])
        else:
            result.append(char)  # If it's not a letter, just append it as is
    
    return ''.join(result)