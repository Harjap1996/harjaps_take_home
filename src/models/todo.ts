export type Priority = "low" | "medium" | "high";
export interface Todo {
    id: string;
    title: string;
    editing: boolean;
    completed: boolean;
    priority: Priority;
}
