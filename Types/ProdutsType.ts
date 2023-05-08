export interface Pokedex {
    meta: Meta;
    data: Datum[];
}

export interface Datum {
    map(arg0: (p: Datum) => JSX.Element): import("react").ReactNode;
    id:                  number;
    title:               string;
    description:         string;
    price:               number;
    discount_percentage: number;
    rating:              number;
    stock:               number;
    brand:               string;
    category:            string;
    thumbnail:           string;
    images:              string;
}

export interface Meta {
    total:             number;
    per_page:          number;
    current_page:      number;
    last_page:         number;
    first_page:        number;
    first_page_url:    string;
    last_page_url:     string;
    next_page_url:     string;
    previous_page_url: null;
}
