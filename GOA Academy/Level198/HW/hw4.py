#4) მოცემულია სია nums = [1, 2, 3, 4, 5, 6], filter -> map ის გამოყენებით აიყვანე ყველა რიცხვი კვადრატში და დატოვე მხოლოდ ის რიცხვები რომლებიც მეტია 20-ზე 

nums = [1, 2, 3, 4, 5, 6]
new = list(filter(lambda a:a>20,list(map(lambda a:a**2, nums))) )
print(new)