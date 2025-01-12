#include <stdio.h>

int binarySearch(int array[], int n, int target) {
    int low = 0;
    int high = n - 1;
    
    while (low <= high) {
        int mid = low + (high - low) / 2;
        int value = array[mid];
        
        if (value == target) {
            return mid;
        } else if (value < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    
    return -1; //Element not found
}

int main() {
    int array[] = {1, 2, 3, 4, 5, 6, 7, 8, 9};
    int n = sizeof(array) / sizeof(array[0]);
    int target = 5;
    
    int result = binarySearch(array, n, target);
    if (result != -1) {
        printf("Element found at index %d\n", result);
    } else {
        printf("Element not found\n");
    }
    
    return 0;
}