interface Person {}

export interface IProduct {
  id: number;
  name: string;
  category: string;
  price: number;
}

export interface ITopSellingProduct extends IProduct {
    rating : number,
    isTopSeller: boolean
}

export interface IAveragePrice {
  category: string;
  price: number;
}

type UsersProducts = ITopSellingProduct | null;

const a : UsersProducts = null;

function getProducts(id: number, usersProducts: UsersProducts) : IProduct[] {
    return [] // products
}

getProducts(1, null).forEach((product)=>{
    console.log(product.name)
})

export interface User {
    id:       number;
    name:     string;
    username: string;
    email:    string;
    address:  Address;
    phone:    string;
    website:  string;
    company:  Company;
}

export interface Address {
    street:  string;
    suite:   string;
    city:    string;
    zipcode: string;
    geo:     Geo;
}

export interface Geo {
    lat: string;
    lng: string;
}

export interface Company {
    name:        string;
    catchPhrase: string;
    bs:          string;
}