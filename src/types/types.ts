export interface filters {
    id: number;
    value: string
    isActive: boolean
};

export interface IPizzas {
    name: string;
    imageURL: string;
    ID: string;
    keyWords: string[];
    size: filters[];
    curst: filters[];
    price: number;
    weight: number;
}

export interface ICart extends IPizzas{
    count: number
}

export interface IFullData {
    pizzas: IPizzas[],
    cart: ICart[]
}