CC=GCC
FLAGS=-Wall
#no space = syntax

mtliani : longest_line.c
#.PHONY : mtliani
			@echo
			$(CC) $(FLAGS) -o lon_lin longest_line.c
			@echo

debug : longest_line.c 
#.PHONY : debug
			$(CC) $(FLAGS) -g -o lon_lin longest_line.c
			gbd -tui glon-lin

obieqturi : lon_lin.o #obieqturi idzaxebs amas
			$(CC) $(FLAGS) -o lon_lin lon_lin.o 
#romelic amas asrulebs

lon_lin.o : longest_line.c #sruldeba es
			$(CC) $(FLAGS) -c -o lon_lin.o longest_line.c


#termoleqtaruli qripto analizatori tu ragac moidzie ddd (shavi iumori)
#dafqvav sakutal parols, rac ashifre da rac ar agishifria

didi : udidesi main.c longest.c copy.c getline.c #4 sawyisi
			$(CC) $(FLAGS) -o udidesi main.c longest.c copy.c getline.c

swori : main.o copy.o getline.o
			$(CC) $(FLAGS) -o udidesi

main.o : main.c
			$(CC) $(FLAGS) -c -o main.o main.c longest.h

copy.o : copy.c
			$(CC) $(FLAGS) -c -o copy.o copy.c

getline.o : getline.c
			$(CC) $(FLAGS) -c -o getline.o getline.c