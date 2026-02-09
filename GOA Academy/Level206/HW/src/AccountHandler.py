class AccountHandler:
    def __init__(self, filename):
        self.filename = filename
        self.accounts = []
        self.load_accounts()

    def load_accounts(self):
        try:
            with open(self.filename, "r") as f:
                for line in f:
                    line = line.strip()
                    if line:
                        username, password = line.split(",", 1)
                        self.accounts.append({"username": username, "password": password})
        except FileNotFoundError: pass

    def save_account(self, username, password):
        with open(self.filename, "a") as f:
            f.write(f"{username},{password}\n")
        self.accounts.append({"username": username, "password": password})

    def create_account(self):
        while True:
            username = input("\nEnter username: ")
            password = input("Enter password: ")

            if any(c.isspace() for c in username + password):
                print("Neither username nor password can contain spaces.")
                continue

            if any(account["username"] == username for account in self.accounts):
                print("Username already taken.")
                continue

            self.save_account(username, password)
            print(f"Account '{username}' created successfully!")
            break

    def login(self):
        username = input("\nEnter username: ")
        password = input("Enter password: ")

        for account in self.accounts:
            if account["username"] == username and account["password"] == password:
                print(f"Welcome back, {username}!")
                return
        print("Invalid username or password.")

    def show_accounts(self):
        if not self.accounts:
            print("No accounts found.")
            return
        print("\nAccounts:")
        for account in self.accounts:
            print(f"- {account['username']}")

accounts = AccountHandler(r"D:/GOA_HW/GOA Academy/Level206/HW/accounts.txt")

while True:
    print("\nOptions:")
    print("1. Create Account")
    print("2. Login")
    print("3. Show Accounts")
    print("4. Exit")
    choice = input("Choose an option: ")

    if choice == "1":
        accounts.create_account()
    elif choice == "2":
        accounts.login()
    elif choice == "3":
        accounts.show_accounts()
    elif choice == "4":
        break
    else:
        print("Invalid option, try again.")
