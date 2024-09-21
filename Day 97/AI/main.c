#include <stdio.h>
/* count charachtersin input; 1st version */

int main( )
{
    long nc;

    nc = 0;
    while (getchar() != EOF) // aris tu ara EOF
        ++nc;   
        // nc++;
        // nc = nc + 1;
        /* they all return the same value */

    printf("\nsimboloebis raodenova %ld\n\n", nc);
    // gamosaxuleba, specialuri stringi
    // "" '' arsebiti gansxvaveba

    // \n striqonebi

    return 0;
    // damamtavrebeli kodi
}

// command output: gcc -Wall -o char_datvla main.c
// ./char_datvla - gamodzaxeba
