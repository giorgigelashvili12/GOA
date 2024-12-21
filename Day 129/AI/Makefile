CC=GCC
CFLAGS=-Wall
#no space = syntax

all : linear_search
.PHONY : all

linear_search : linear_search.o
		$(CC) $(CFLAGS) -o linear_search linear_search.o

linear_search.o : main.c
		$(CC) -Wall -c -o linear_search.o main.c