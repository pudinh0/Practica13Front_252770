## Ejercicio 1: el marco de la página

**¿Cómo se organiza la página y cómo se muestran el encabezado, el contenido y el pie?**

El componente `Layout` recibe el encabezado, el pie y `children` como props. De esta manera, el contenido de la tienda se coloca entre el encabezado y el pie, sin que `Layout` tenga que conocer los detalles del catálogo.

El componente `Encabezado` presenta la marca de la tienda y la cantidad de piezas del carrito. El componente `PiePagina` muestra un resumen del carrito y su total, formateado como moneda mexicana. El pie permanece fijo en la parte inferior de la pantalla y el contenido reserva espacio para que no quede oculto.

## Ejercicio 2: el catálogo

**¿Cómo se representan los productos y qué sucede cuando un producto está agotado?**

Los productos están definidos en el arreglo `productos` de `src/datos.ts`, junto con su identificador, nombre, precio, categoría, imagen y existencia. El tipo `Producto` describe esa estructura.

`Catalogo` recibe la lista de productos y la función para agregarlos al carrito. Recorre la lista con `.map()` y crea una `TarjetaProducto` por producto; usa el identificador único como `key`.

Cada `TarjetaProducto` recibe el producto y la función `onAgregar` por props. Muestra su imagen, nombre, precio y existencia. Si la existencia es cero, muestra «Agotado» y deshabilita el botón. Si hay existencias, el botón llama a `onAgregar` con el producto seleccionado.

## Ejercicio 3: filtrar y agregar al carrito

**¿Qué información se guarda en el estado y qué valores se calculan al renderizar?**

El componente `App` mantiene en el estado la categoría seleccionada y los productos agregados al carrito. Estos estados se actualizan con `useState`.

Los botones de filtro se generan a partir de las categorías presentes en los datos, además de «todas». `Filtros` informa el cambio mediante `onCambiar`; la categoría activa recibe una clase visual distinta. La lista visible se obtiene filtrando los productos durante el renderizado, sin duplicarla en el estado.

Al agregar un producto, `App` crea un arreglo nuevo con el operador spread (`[...carrito, producto]`), sin modificar el arreglo anterior. El número de piezas y el total también se calculan desde el carrito en cada renderizado; no se guardan como estados separados. El total suma el precio de cada producto agregado.