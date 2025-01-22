public class Main {
    public static void main(String[] args) {
        m(3, 5, 1, 3, 6);
    }

    public static void m(int a, int b, int c, int d, int e) {
        if (a > b) {
            if (a > c) {
                if (a > d) {
                    if (a > e) {
                        System.out.println(a);
                    } else {
                        if (e != 0) {
                            System.out.println(e);
                        }
                    }
                } else {
                    if (d > e) {
                        System.out.println(d);
                    } else {
                        System.out.println(e);
                    }
                }
            } else {
                if (c > d) {
                    if (c > e) {
                        System.out.println(c);
                    }
                }
            }
        } else {
            if (b > c) {
                if (b > d) {
                    if (b > e) {
                        System.out.println(b);
                    } else {
                        System.out.println(e);
                    }
                } else {
                    if (d > e) {
                        System.out.println(d);
                    } else {
                        System.out.println(e);
                    }
                }
            } else {
                if (c > d) {
                    if (c > e) {
                        System.out.println(c);
                    }
                } else {
                    if (d > e) {
                        System.out.println(d);
                    }
                }
            }
        }
    }
}