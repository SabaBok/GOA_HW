#შექმენით ტუპლი რომელშიც მოათავსებთ სხვადასხვა სახელებს, შემდეგ მოდებნით ამ სახელებიდან იმ სიტყვას რომელიც იწყება ა ასოზე ის ელემენტები ჩაანაცვლეთ სიტყვა "change"

names = ('saba','nika','gio','ana')
new_names = tuple('change' if name[0] == 'a' else name for name in names)
print(new_names)
