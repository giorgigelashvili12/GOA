interface User {
    id: number;
    username: string;
    email: string;
    isAdmin?: boolean;
}

function returnAdmins(users: User[]): User[] {
    return users.filter(user => user.isAdmin);
}

function getFirstItem<T>(arr: T[]): T {
    return arr[0];
}

const baba = getFirstItem<string>(["hello", "world"]);

type ApiResponse = {
    status: "success";
    data: {
        id: number;
        name: string;
    };
};

function getName(response: ApiResponse): string {
    return response.data.name;
}

enum Role {
    Guest,
    User,
    Admin,
}

function welcome(role: Role): string {
    if (role === Role.Guest) {
        return "Guest access only";
    }
      
    if (role === Role.User) {
        return "Welcome User!";
    }
      
    if (role === Role.Admin) {
        return "Welcome Admin!";
    }
      
    return "Unknown role";
 }
