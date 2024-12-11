#2) გააკეთეთ random student generator რომელსაც გადაეცემა ჯგუფის მოსწავლეებით სავსე სია და დაგვიბრუნებს რენდომულად განაწილებულ გუნდებს მზგავსად როგორც გავაკეთეთ წინა გაკვეთილზე
import random

def random_man(names):
    everyone = names
    all_group = []
    trio = []
    while everyone != []:
        if len(everyone) < 3:
            break
        else:
            for i in range(3):
                randomer = random.choice(everyone)
                trio.append(randomer)
                everyone.remove(randomer)
        all_group.append(trio)
        trio = []
    return all_group, everyone
students = ["zangi","mepe","me","meore zangi","rasisti","gmerti","kide upro zangi"]
print(random_man(students))