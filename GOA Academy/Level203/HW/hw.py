#შექმენი shopping cartი რომელსაც ექნება გამართული რეგისტრაცია და ლიგინი, ასევე ქართში შეგვეძლება პროდუქტების დამატება, ამოშლა და რედაქტირება python file 
# handling-ის გამოყენებით.

FILE_PATH = r"D:\GOA_HW\GOA Academy\Level201\HW\user_info.txt"
account = None
logged = False

while not logged:
    choice_1 = input('Do you want to register or login? (r/l): ').lower()

    if choice_1 == 'r':
        while True:
            name = input('Enter your name: ').strip()
            password = input('Enter your password: ').strip()

            if not name or not password:
                print("Fields cannot be empty")
                continue
            if len(password) < 8:
                print("Password must be at least 8 characters")
                continue

            try:
                with open(FILE_PATH, 'r+') as file:info = file.readlines()
            except FileNotFoundError:
                info = []
                with open(FILE_PATH, 'w') as f:pass

            users = [line.split('-')[0] for line in info]

            if name in users:
                print("That name is taken already")
            else:
                with open(FILE_PATH, 'a') as file:
                    file.write(f"{name}-{password}-[]\n")
                account = (name, password, [])
                logged = True
                print(f"You are registered and logged in as --> {name}")
                break

    elif choice_1 == 'l':
        try:
            with open(FILE_PATH, 'r') as file:
                info = file.readlines()
        except FileNotFoundError:
            print("No users found. You need to register first.")
            continue

        while True:
            name = input('Enter your name: ').strip()
            password = input('Enter your password: ').strip()

            if not name or not password:
                print("Fields cannot be empty")
                continue

            found = False
            for line in info:
                user, passw, cart = line.strip().split('-', 2)
                if name == user and password == passw:
                    account = (user, passw, eval(cart))
                    logged = True
                    print(f"You are logged in as --> {user}")
                    found = True
                    break

            if not found:
                print("Such an account doesn't exist or password is wrong")
    else:
        print("Wrong input. Please type 'r' or 'l'.")

def save_cart(account):
    with open(FILE_PATH, "r") as file:lines = file.readlines()

    with open(FILE_PATH, "w") as file:
        for line in lines:
            user, pw, cart = line.strip().split("-", 2)
            if user == account[0]:
                file.write(f"{user}-{pw}-{account[2]}\n")
            else:
                file.write(line)

def shopping(account):
    while True:
        print("\nShopping Menu:")
        print("1. Add product")
        print("2. Remove product")
        print("3. View cart")
        print("4. Exit")

        choice = input("Choose an option: ")

        if choice == "1":
            product = input("Enter product name to add: ").strip()
            if product:
                account[2].append(product)
                save_cart(account)
                print(f"Added '{product}' to cart.")

        elif choice == "2":
            product = input("Enter product name to remove: ").strip()
            if product in account[2]:
                account[2].remove(product)
                save_cart(account)
                print(f"Removed '{product}' from cart.")
            else:
                print("Product not in cart.")

        elif choice == "3":
            if account[2]:
                print("Your cart:")
                for p in account[2]:
                    print("-", p)
            else:
                print("Your cart is empty.")

        elif choice == "4":
            print("Exiting shopping cart...")
            break

        else:
            print("Invalid choice.")
shopping(account)