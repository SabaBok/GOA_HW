#2) შექმენი კლასი Product: რომელსაც ექნება name, price, quantity. შექმენი პროდუქტების სია და დაბეჭდე ყველაზე ძვირი და ყველაზე იაფი პროდუქტები

class Product:
	def __init__(self,name,price,quantity):
		self.name = name
		self.price = price
		self.quantity = quantity

prod1 = Product('banana',1.5,10)
prod2 = Product('apple',2.0,5)
prod3 = Product('orange',1.0,8)
prod4 = Product('grape',3.0,12)
prod5 = Product('kiwi',0.5,20)
product_list = [prod1,prod2,prod3,prod4,prod5]
sorted_products = list(sorted(product_list,key=lambda x:x.price))
for i in range(0,len(sorted_products)):
	if i == 0: print(f'{sorted_products[i].name} <-- the cheapest product at ${sorted_products[i].price}')
	if i == len(sorted_products)-1: print(f'{sorted_products[i].name} <-- the most expensive product at ${sorted_products[i].price}')