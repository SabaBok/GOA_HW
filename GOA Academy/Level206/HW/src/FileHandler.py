class TodoList:
	def __init__(self, text_name):
		self.filename = f"D:/GOA_HW/GOA Academy/Level206/HW/{text_name}.txt"
		self.tasks = []
		self.load_tasks()

	def load_tasks(self):
		try:
			with open(self.filename, "r") as file:
				self.tasks = [line.strip() for line in file]
		except FileNotFoundError:
			self.tasks = []

	def save_tasks(self):
		with open(self.filename, "w") as file:
			for task in self.tasks:
				file.write(task + "\n")

	def get_next_number(self):
		if not self.tasks: return 0
		last_line = self.tasks[-1]
		number = int(last_line.split(" ")[0])
		return number + 1

	def add_task(self):
		task = input("Enter a new task: ")
		number = self.get_next_number()
		self.tasks.append(f"{number} - {task}")
		self.save_tasks()

	def remove_task(self):
		number = input("Enter task number to remove: ")
		for task in self.tasks:
			if task.startswith(number + " "):
				self.tasks.remove(task)
				self.save_tasks()
				return

	def mark_task_completed(self):
		number = input("Enter task number to mark completed: ")
		for i in range(len(self.tasks)):
			task = self.tasks[i]
			if task.startswith(number + " "):
				parts = task.split(" ", 2)
				self.tasks[i] = f"{parts[0]} + {parts[2]}"
				self.save_tasks()
				return


todo = TodoList("todo-list")

while True:
	print("\nTodo List:")
	for task in todo.tasks: print(task)

	print("\nOptions:")
	print("1. Add Task")
	print("2. Remove Task")
	print("3. Mark Task Completed")
	print("4. Exit")

	choice = input("Choose an option: ")

	if choice == "1": todo.add_task()
	elif choice == "2": todo.remove_task()
	elif choice == "3": todo.mark_task_completed()
	elif choice == "4": break
	else: print("Invalid option, please try again.")