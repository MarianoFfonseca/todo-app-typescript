export type ListOfTodos = Array<Todo>;

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}
