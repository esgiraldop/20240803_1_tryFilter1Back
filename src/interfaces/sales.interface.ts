export interface ISale<T = any> {
    id?: number;
    userID: number;
    productID: number;
    description: string;
    products?: T;
  }