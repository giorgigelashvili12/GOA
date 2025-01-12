public class Main{
    public static void main(String[] args) {
        int array[] = new int[100];
        int target = 42;

        for(int i = 0; i < array.length; i++) {
            array[i] = i;
        }

        int index = binarySearch(array, target);
        if(index == -1) {
            System.out.printIn(target + " Not found");
        }
        else {
            System.out.printIn("ELement found at: " + index);
        }
    }

    private static int binarySearch(int[] array, int target) {
        int low = 0;
        int high = array.length - 1;

        while(low <= high) {
            int middle = low + (high - low) / 2; // Mid index
            int value = array[middle];

            //System.out.printIn('Middle: ' + value);

            if(value < target) {
                low = middle + 1;
            }
            else if(value > target) {
                high = middle - 1;
            } 
            else {
                return middle;//target found (is middle)
            }
        }

        return -1;
    }
}