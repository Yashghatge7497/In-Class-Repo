export interface User {
    firstName: string;
    lastName: string;
    handle: string;
    password: string;
    email: string;
    picture: string;
    id: number;
    userTasks : any;
}

export const list: User[] = [
    {
        id: 1,
        handle: 'Yash',
        firstName: 'yash',
        lastName: 'ghatge',
        password: 'yash123',
        email: 'l@gmail.com',
        picture: 'https://randomuser.me/api/portraits/lego/4.jpg',
        userTasks: [
            {task : 'Need to update vue',dueDate:'04/21/2022', isCompleted: true, assignedBy: "Sakshi"},
            {task : 'Need to update pinia',dueDate:'05/18/2022', isCompleted: false, assignedBy: "OnePiece"},
            {task : 'Need to update express',dueDate:'03/11/2022', isCompleted: true, assignedBy: "Sakshi"}
        ]
    },
    {
        id: 2,
        handle: 'Sakshi',
        firstName: 'sakshi',
        lastName: 'ghatge',
        password: 'sakshi123',
        email: 'lyagami@gmail.com',
        picture: 'https://randomuser.me/api/portraits/lego/5.jpg',
        userTasks: [
            {task : 'Need to update angular',dueDate:'03/21/2022', isCompleted: false, assignedBy: "Yash"},
            {task : 'Need to update react',dueDate:'03/26/2022', isCompleted: false, assignedBy: "Harika"}
        ]
    },
    {
        id: 3,
        handle: 'Harika',
        firstName: 'Hari',
        lastName: 'Rex',
        password: 'hari123',
        email: 'l@gmail.com',
        picture: 'https://randomuser.me/api/portraits/lego/2.jpg',
        userTasks: [
            {task : 'Need to update jQuery',dueDate:'04/05/2022', isCompleted: false, assignedBy: "Sakshi"},
            {task : 'Need to update ajax',dueDate:'03/25/2022', isCompleted: false, assignedBy: "Yash"}
        ]
    }
]