#4)https://www.codewars.com/kata/54147087d5c2ebe4f1000805/train/python
def func1():
    print("True")
def func2():
    print("False")
        
def _if(bool, func1, func2):
    if bool:
        func1()
    else:
        func2()

_if(True,func1,func2)