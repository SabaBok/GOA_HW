#გვაქვს ცარიელი ტექსტური ფაილი, შევქმნათ კლასი TodoList, გვქონდეს რაღაც მეთოდები რომლითაც todolistში ჩავამატებთ task-ებს, 
# ასევე ამოვშლით თასქებს და მოვნიშნავთ შესრულებულად, ეს ყველა ასევე უნდა ჩაემატოს და წაიშალოს ცარიელი ფაილიდანაც, მაგისთვის გამოვიყენოთ file handling

class TodoList:
	def __init__(self,text_name):
		self.filename = f'D:\GOA_HW\GOA Academy\Level206\HW\{text_name}.txt'
		self.tasks = []
		self.load_tasks()

	def load_tasks(self):
		try: 
			with open(self.filename, 'r') as file: 
				self.tasks = [line.strip() for line in file.readlines()]
		except FileNotFoundError: self.tasks = []

	def save_tasks(self):
		with open(self.filename, 'w') as file:
			for task in self.tasks: file.write(task + '\n')

	def add_task(self):
		task = input("Enter a new task: ")
		self.tasks.append(task)
		self.save_tasks()

	def remove_task(self):
		task = input("Enter the task to remove: ")
		if task in self.tasks:
			self.tasks.remove(task)
			self.save_tasks()

	def mark_task_completed(self):
		task = input("Enter the task to mark as completed: ")
		if task in self.tasks:
			index = self.tasks.index(task)
			self.tasks[index] = f"{task} - completed"
			self.save_tasks()

todo = TodoList('todo-list')
while True:
	print("\nTodo List:\n")
	for task in todo.tasks: print(task)
	print("\nOptions: \n1. Add Task \n2. Remove Task \n3. Mark Task Completed \n4. Exit")
	choice = input("Choose an option: ")
	if choice == '1': todo.add_task()
	elif choice == '2': todo.remove_task()
	elif choice == '3': todo.mark_task_completed()
	elif choice == '4': break
	else: print("Invalid option, please try again.")
