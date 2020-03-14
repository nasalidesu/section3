
import time
import random
import sys

# just of effects. add a delay of 1 second before performing any action
SLEEP_BETWEEN_ACTIONS = 1
#means that the baord is 6 x 6, so total position is 36.
MAX_VAL = 36
#normal dice la 1 - 6
DICE_FACE = 6

# snake takes you down bite => going down to position
snakes = {
    9: 5,
    25:3,
    33:17

}

# ladder takes you up  ladder from => to location
ladders = {
    3:11,
    15:34,
    20:29
}

player_turn_text = [
    "My turn now!! your turn after this booo.",
    "Let me proceed.",
    "Gonna win this loser.",
    "Are you ready  loser? to watch my win??",
    "Hmmmm, Interesting. ",
    "I gonna have a meeting after this, please end this early noob."
]
player2_turn_text = [
    "Not bad.",
    "Slowly but surely.",
    "Guess my turn.",
    "I gonna end this ealy , watch me !!. ",
    "me? excuse me.",
    "Too bad. "


]

snake_bite = [
    "A giant snake appear !!",
    "Something big is coming and it's not friendly"
]

ladder_jump = [
    "hell yeahh",
    "easy as 123",
    "wohoooooooooo",
    "yeah !!"
]


def welcome_msg():
    msg = """

    ===========================================================================================
    Welcome  adventurers to the Mighty Game of Snake and Ladder where losing is for loser
    ===========================================================================================
      - Greeting adventures, you need to defeat this game to earn a remarkable rewards.
      - Both of you have to fight to reach the final destination
        You canly only move based on your dice result.
        Take it in turns to roll the dice of faith.
        Move forward according the dice result.
      - To roll the dice just press enter
      - There will be some magic power to transport you to futher position if you are lucky
      - Beware the snake on your journey !!!

    """
    print(msg)


def get_player_names():
    player1_name = None
    #player must enter a name if not the loop will continue la huhuh
    while not player1_name:
        player1_name = input("Please state your name adventurer = ").strip()

    player2_name = None
    while not player2_name:
        player2_name = input("You, the second adventurer, state your name = ").strip()

    print("\nMatch will be played between " + player1_name + " and " + player2_name + "\n")
    print("GOODLUCK !")
    return player1_name, player2_name


def get_dice_value():
    #time.sleep(SLEEP_BETWEEN_ACTIONS)
    dice_value = random.randint(1, DICE_FACE)
    print("Dice result = " + str(dice_value))
    return dice_value


def got_snake_bite(old_position, current_value, player_name):
    print("\n" + random.choice(snake_bite).upper() + " vvvvv ")
    print("\n" + player_name + " got bite. Going down from " + str(old_position) + " to " + str(current_value))


def got_ladder_jump(old_position, current_value, player_name):
    print("\n" + random.choice(ladder_jump).upper() + " ^^^^^ ")
    print("\n" + player_name + " teleported from " + str(old_position) + " to " + str(current_value))


def snake_ladder(player_name, current_value, dice_value):
    time.sleep(SLEEP_BETWEEN_ACTIONS)
    old_position = current_value
    current_value = current_value + dice_value

    if current_value > MAX_VAL:
        print("You need " + str(MAX_VAL - old_position) + " to win this game. Keep trying.")
        return old_position

    print("\n" + player_name + " moved from position " + str(old_position) + " to " + str(current_value))
    if current_value in snakes:
        final_value = snakes.get(current_value)
        got_snake_bite(current_value, final_value, player_name)

    elif current_value in ladders:
        final_value = ladders.get(current_value)
        got_ladder_jump(current_value, final_value, player_name)

    else:
        final_value = current_value

    return final_value


def check_win(player_name, position):
    time.sleep(SLEEP_BETWEEN_ACTIONS)
    if MAX_VAL == position:
        print("\n\n\nEpic sound starting........\n\n")
        print(player_name + " has reach the final destination ")
        print(player_name + " won the game of Migthy Snake Ladder and a mountain of golds.")
        print("""
                        $
                       ***
                      $*$**
                     ****$***
                   $**$**$$*$**$

        """)
        print("Congratulations " + player_name)
        print("\n Play again Y/N?")

        #after one the player won the game choice to play again or exit
        input_ask=input("\n press any key to exit , yes to play again :")
        if input_ask == 'yes':
            start()
        else:
            sys.exit(1)


def start():
    welcome_msg()
    time.sleep(SLEEP_BETWEEN_ACTIONS)
    player1_name, player2_name = get_player_names()
    time.sleep(SLEEP_BETWEEN_ACTIONS)

    player1_current_position = 0
    player2_current_position = 0

    while True:

        input_1 = input("\n" + player1_name + ": " + random.choice(player_turn_text) + " Hit the enter to roll dice: ")
        print("\ntak tung tak tung tak tung sound....................")
        dice_value = get_dice_value()
        time.sleep(SLEEP_BETWEEN_ACTIONS)
        print(player1_name + " is moving....")
        player1_current_position = snake_ladder(player1_name, player1_current_position, dice_value)
        print("------------------------------------------------------")

#check the current position is it 36?
        check_win(player1_name, player1_current_position)

        input_2 = input("\n" + player2_name + ":" + random.choice(player2_turn_text) + " Hit the enter to roll dice: ")
        print("\ntak tung tak tung tak tung sound....................")
        dice_value = get_dice_value()
        time.sleep(SLEEP_BETWEEN_ACTIONS)
        print(player2_name + " is moving....")
        player2_current_position = snake_ladder(player2_name, player2_current_position, dice_value)

        check_win(player2_name, player2_current_position)
        print("------------------------------------------------------")

if __name__ == "__main__":
    start()
