Caralibro S.A. nos solicita que realicemos una primera versión de su nuevo sitio. Se desea un elemento *nav* que se visualice en todo momento a la izquierda del *viewport*[1]. En donde irá el contenido, se desea poder agregar elementos *section* dinámicamente a un contenedor y que se apilen hacia la derecha.

Aplicando todos los conocimientos extensivos de CSS que poseemos debemos utilizar el atributo position en un solo elemento. Por un pedido del cliente se encuentra totalmente prohibido el uso del valor **_position: absolute_**. Junto con este último pedido se sumaron:
* el nav debe tener un ancho estático y debe ocupar la altura total del viewport
* los elementos section deben estar centrados verticalmente
* nuestro contenedor del chat debe estar centrado horizontalmente y debe tener un ancho estático
* cada elemento section debe tener un ancho mínimo relativo al ancho del viewport

Se deberá entregar un archivo html y un archivo css. La versión de entrega no deberá contener ningún elemento section y deberá indicar cuál es el contenedor dónde se deben agregar estos elementos.