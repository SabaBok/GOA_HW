#5) nums = [9, 2, 7, 4, 5, 6, 1], დატოვე მხოლოდ კენტი რიცხვები დაა დაალაგე ზრდადობით

nums = [9, 2, 7, 4, 5, 6, 1]
new = list(sorted(list(filter(lambda a:a%2!=0, nums))))
print(new)