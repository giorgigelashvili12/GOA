def creator():
    account_holder = input("Enter account holder name: ")
    message = "Hello, " + account_holder
    account_password = input("Enter your password: ")
    confirm_account_password = input("Confirm account password: ")
    if confirm_account_password != account_password:
         "Passwords do not match! Try again or run the system again."
    else:
        return "Account created successfuly! " + message

print(creator())
balance = float(input("Enter your balance: "))
message = "Your balance is $" + str(balance)
if balance < 0:
    print("Error. Balance can't be lower than 0.")
else:
    print(balance)

print("Choose: ")
print("1. Withdraw")
print("2. Deposit")
answer = int(input("Enter only number: "))

if answer == 1:
    withdraw = int(input("Enter withdraw amount: "))
    balance = balance - withdraw
    if balance < withdraw:
        print("Withdraw is more than the balance!")
    else:
        print("Withdraw Was Successful!")
elif answer == 2:
    deposit = int(input("Enter deposit amount: "))
    balance = deposit + balance
    print("Deposit was successful!")
