#include <stdio.h>


void pr(int list[], int N);

int main()
{
    int list[] = {6, 4, 2, 1, 18, 17, 12};
    int newElement, location, i;
    int N = 7;
    
    pr(list, N);
    
    for( i = 1; i < N; i++ )
    {
        newElement = list[ i ];
        location = i - 1;
        while( (location >= 0) && (list[ location ] > newElement) )
        {
            list[ location + 1] = list[ location ];
            location = location - 1;
        }
        
        list[ location + 1 ] = newElement;
    }
    
    pr(list, N);
    
}

void pr(int list[], int N)
{
    for (int i = 0; i < N; i++)
            printf("%d ", list[i]);
        printf("\n");
}


//  ტყუილი ინტერპრეტაცია Insert-sort with Romanian folk dance
// Sunday, June 30 2024
//  https://www.youtube.com/watch?v=ROalU379l3U 