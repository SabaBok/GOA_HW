from turtle import *
def draw():
    width(3)
    #making a square
    begin_fill()
    forward(200)
    left(90)
    forward(200)
    left(90)
    forward(200)
    left(90)
    forward(200)
    left(90)
    end_fill()

    #making a door
    forward(90)
    left(90)
    color("yellow")
    begin_fill()
    forward(50)
    right(90)
    forward(25)
    right(90)
    forward(50)
    end_fill()
    color("black")

    #making a roof
    penup()
    goto(200,200)
    pendown()
    color("red")
    begin_fill()
    right(150)
    forward(200)
    left(120)
    forward(200)
    end_fill()
    exitonclick()

draw()