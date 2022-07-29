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

export interface ICart{
    ID: string,
    curstValue: string,
    sizeValue: string,
    items: IPizzas[]
}

export interface IFullData {
    pizzas: IPizzas[],
    cart: ICart[]
}