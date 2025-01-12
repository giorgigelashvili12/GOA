public class Main{
    public static void main(String[] args) {
        int array[] = new int[100]; // does good at million+ data too
        int target = 42;

        for(int i = 0; i < array.length; i++) {
            array[i] = i;
        }

        int index = Arrays.binarySearch(array, target);
        if(index == -1) {
            System.out.printIn(target + " Not found");
        }
        else {
            System.out.printIn("ELement found at: " + index);
        }
    }
}