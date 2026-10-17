export interface Producto {
  id: number;
  nombre: string;
  precio: number;
  categoria: string;
  existencia: number;
  imagen: string;
}

export interface ItemCarrito {
  producto: Producto;
  cantidad: number;
}   