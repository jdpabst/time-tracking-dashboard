export type UserContextType = {
 user: User;
 setUser: (newValue: User) => void;
 setTimes: (newTimes: Times[]) => void;
 times: Times[];
 loggedTime: LoggedTime[];
 setLoggedTime: (newLoggedTime: LoggedTime[]) => void;
}

// Define a type for the current and previous values in each timeframe
interface Timeframe {
 current: number; // or string, depending on your actual data type
 previous: number; // or string, depending on your actual data type
}

// Define the structure for timeframes
interface Timeframes {
 daily: Timeframe;
 weekly: Timeframe;
 monthly: Timeframe;
}

// Update the Times interface to use the specific Timeframes type
export interface Times {
 id: number;
 title: string;
 timeframes: Timeframes; // Use the defined Timeframes type here
}

export interface LoggedTime {
 createAt: Date;
 hours: number;
 timeCommitmentsId: number;
}


export type User = {
 id: number;
 // add more stuff here as needed
}