#
#
#
CC=gcc
CFLAGS=-Wall 


all : count
.PHONY : all

count : main.o
$(CC) $(CFLAGS) -o main main.o

main.o : main.c 
$(CC) -Wall -c -o main.o main.c

debug:clean main.c
$(CC) -Wall -g -o test main.c 
gdb -tui  test



.PHONY: clean
clean : 
rm -rf *.o 