export type PizzaItems = {
    id: number;
    imageUrl: string; 
    title: string; 
    types: number[]; 
    sizes: number[];
    price: number; 
    category: number;
    rating: number; 
}

export type CartPizzaItem = {
    id: number;
    title: string;
    price: number;
    imageUrl: string;
    type: string;
    size: number;
    count: number;
  }

export enum Status {
    LOADING = 'loading',
    SUCCESS = 'success',
    ERROR = 'error'
}

