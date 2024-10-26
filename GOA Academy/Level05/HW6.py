#6)დაწერეთ პითონის პროგრამა, რომელიც ითვლის მართკუთხედის ფართობს.
#  პროგრამამ უნდა სთხოვოს მომხმარებელს მართკუთხედის სიგანე და სიმაღლე.
height = int(input("enter the height of the rectangle :"))
width = int(input("enter the width of the rectangle :"))
if height == width:
    print("this is a square and its area is",height*width)
else:
    print("this is the size of the rectangle",height*width)