#2)https://www.codewars.com/kata/57ee4a67108d3fd9eb0000e7
geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
def goose_filter(birds):
    new_arr = []
    for bird in birds:
        for goos in geese:
            if bird == goos:
                break
            else:
                new_arr.append(bird)
    return new_arr
            