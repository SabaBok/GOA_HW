import random

def random_students(names):
    everyone = names
    all_group = []
    trio = []
    while everyone != []:
        if len(everyone) < 3:
            break
        else:
            for i in range(3):
                random_student = random.choice(everyone)
                trio.append(random_student)
                everyone.remove(random_student)
        all_group.append(trio)
        trio = []

    for i in all_group:
        print(i)
    print(everyone)

random_students(["zangi","mepe","me","meore zangi","rasisti","gmerti","kide upro zangi"])

