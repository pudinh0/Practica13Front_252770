
import './App.css'
import { productos } from './datos'
import { Layout } from './Layout'
import { Encabezado } from './Encabezado'
import { PiePagina } from './PiePagina'
import { Catalogo } from './Catalogo'
import { useState } from 'react'
import { Filtros } from './Filtros'
import type { Producto } from './datos'

const categorias = ['todas', ...new Set(productos.map((p) => p.categoria))];

function App() {
  //Estado #1 depende del filtro
  const[categoria, setCategoria] = useState('todas');
  const [carrito, setCarrito] = useState<Producto[]>([]);
  const totalCarrito = carrito.reduce((acumulado, producto) => acumulado + producto.precio, 0);
  const productosVisibles = categoria === 'todas' ? productos : productos.filter((p) => p.categoria === categoria);

  return (
    <Layout encabezado={<Encabezado piezas={carrito.length} />} pie={<PiePagina piezas={carrito.length} total={totalCarrito} />}>
      <section className="portada">
        <h1>Catalogo de Temporada</h1>
        <Filtros categorias={categorias} activa={categoria} onCambiar={setCategoria} />
        <Catalogo productos={productosVisibles} onAgregar={(p) => setCarrito([...carrito, p])} />
      </section>
    </Layout>
  )

}
export default App