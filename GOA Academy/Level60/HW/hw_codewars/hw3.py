#3)https://www.codewars.com/kata/58925dcb71f43f30cd00005f
def latest_clock(a, b, c, d):
    digits = [a, b, c, d]
    max_time = ""

    for i in range(4):
        for j in range(4):
            if i == j:
                continue
            for k in range(4):
                if k == i or k == j:
                    continue
                for l in range(4):
                    if l == i or l == j or l == k:
                        continue

                    hour = digits[i] * 10 + digits[j]
                    minute = digits[k] * 10 + digits[l]

                    if 0 <= hour <= 23 and 0 <= minute <= 59:
                        time_str = f"{hour:02d}:{minute:02d}"
                        if max_time == "" or time_str > max_time:
                            max_time = time_str