export type UserContextType = {
 user: User;
 setUser: (newValue: User) => void;
}

export type User = {
 id: number;
 // add more stuff here as needed
}