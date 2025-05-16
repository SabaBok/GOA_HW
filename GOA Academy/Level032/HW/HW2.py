#2)https://www.codewars.com/kata/5a3dd29055519e23ec000074
def check_exam(arr1, arr2):
    grade = 0
    for i in range(len(arr1)):
        if arr2[i] == arr1[i]:
            grade += 4
        elif arr2[i] == "":
            grade += 0
        else:
            grade -= 1

    if grade < 0:
        return 0
    else:
        return grade  


print(check_exam(["a", "a", "b", "b"], ["a", "c", "b", "d"]))  #6