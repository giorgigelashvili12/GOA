#include <stdio.h>

int main(void){
    printf("\nHello world!\n");

    int r = 0;
    r = printf("\nHello world!\n");
    printf("raodeonoba %d\n", r);

    return 0;
}

#include <stdio.h>
/* copy input to output; 1st version */
main (){
    int c;
    c = getchar();
    while (c != EOF) {
        putchar(c);
        c = getchar ();
    }
}