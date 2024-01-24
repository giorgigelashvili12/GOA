import random

dice_input = int(input('How many dice rolls do you want to roll? [1-6] '))
if dice_input < 0:
    print('Please enter a valid number.')
elif dice_input > 6:
    print('Please enter a valid number.')
else:
    print('Please enter a valid number.')

bot_roll = random.randint(1, 6)

if int(dice_input) < int(bot_roll):
    print("Awh, You lost! Try again! You rolled: ", str(dice_input), "Computer rolled: ", str(bot_roll))
else: 
    print("Wow, You won! You rolled: ", str(dice_input), "Computer rolled: ", str(bot_roll))
    
