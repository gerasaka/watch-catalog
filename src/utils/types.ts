export interface IProduct {
  id: number;
  name: string;
  images: string[];
  price: number;
  colors: string[];
  rating: number;
}

export interface ISpecification {
  productId: number;
  brand: string;
  movement: string;
  water_resistance: string;
  case_material: string;
  dial_color: string;
  band_material: string;
}
