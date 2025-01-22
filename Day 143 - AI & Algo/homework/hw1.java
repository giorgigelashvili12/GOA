// HW 1
public class Main {
    public static void main(String[] args) {
        b(1, 99, 3);
    }

    public static void b(int a, int b, int c) {
        if (a == 0 || b == 0 || c == 0) {
            System.out.println(0);
            return;
        }

        int s = (a * b) / c;
        int e = (a / b) * c;

        if (a % c == 0 || b % c == 0) {
            e = (b / c) * a;
        }

        System.out.println(s + " " + e);
    }
}