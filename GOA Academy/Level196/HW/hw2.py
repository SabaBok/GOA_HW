def min_umbrellas(weather):
    rainy_days = {"rainy", "thunderstorms"}
    home = 0
    work = 0
    min_needed = 0
    for i in range(len(weather)):
        w = weather[i]
        if w in rainy_days:
            if i % 2 == 0:
                if home > 0:
                    home -= 1
                    work += 1
                else:
                    min_needed += 1
                    work += 1
            else:
                if work > 0:
                    work -= 1
                    home += 1
                else:
                    min_needed += 1
                    home += 1
    return min_needed

#https://www.codewars.com/kata/58298e19c983caf4ba000c8d