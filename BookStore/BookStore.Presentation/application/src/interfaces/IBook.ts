export interface IBookState {
    books : IBook[];
    selectedBook : IBook  
}

export interface IBook {
    id: number;
    title: string;
    price: number;
    category: string;
    description: string;
    createdDate : string;
}
  