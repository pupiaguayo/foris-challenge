
# Foris Frontend Challenge

RickAndMory Memotest

## Authors

- [@pupiaguayo](https://www.github.com/pupiaguayo)

  
## Deployment

To deploy this project run

```bash
  npm run build
```

    
## Tech Stack

React, Javascript, CSS, Firebase (hosting)

  
## Support

For support, email rdarioaguayo@gmail.com

  
## Run Locally

Clone the project

```bash
  git clone https://github.com/pupiaguayo/foris-challenge
```

Go to the project directory

```bash
  cd foris-challenge
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```
## Step to step (Spanish)

1er etapa: 
- Detección de componentes a crear utilizando el diseño proporcionado en Figma. Con esto pude establecer la necesidad de contar con varios componentes (Por ej: Header, Cards, Custom-button, etc ) y 2 vistas (Home y Game View).
- Tomando lo mencionado sobre configuración de rutas he decidido utilizar React Router
- Por cuanto a las imágenes decidí utilizarlas en formato SVG para un mejor rendimiento de la web
- Para manejo de estados he decidido utilizar Context, lo considere la mejor opción teniendo en cuenta el tiempo limite de desarrollo(7 días como máximo) y el tipo de proyecto.

2da etapa: 

Creación de los componentes mencionados, implementación de estilos y vistas. En este punto hubo un caso como por ejemplo el del Button en el que decidí crear un solo componente con diferentes estilos que serian usados según el componente donde se necesite insertar dicho botón. 

Se necesito obtener 6 personajes, brindados por la API de Rick and Morty, e insertarlos duplicados en un array para luego pasar a la etapa del juego. Para el juego utilice una función (shuffleArray) que los ordenaba aleatoriamente para que luego el usuario pueda realizar la búsqueda de personajes que coincidan.

En caso de coincidencia, en vez de hacerlas desaparecer, considere mejor opción la de dejar dichas cartas con los personajes a la vista e incrementar el contador de aciertos. En caso de no contar con coincidencia, luego de 1 segundo volvían a girar. Otra decision que tome respecto al diseño fue que el Subtitulo “Personajes” se encuentre centrado ya que a mi parecer quedaba mejor visualmente ya que el resto de los elementos tambien se encontraban centrados

Una vez llegados a los 6 aciertos posibles se mostraba la vista de Finalización junto con el numero de turnos utilzados y la posibilidad de dirigirnos a la home o reiniciar el juego. 

*Responsive: El diseño principal tal como fue solicitado cuenta con 3 filas y 4 columnas, luego como en Figma no solicitaba un diseño responsive obligatorio, decidí que las cartas se muestren de a 2 o 3 por fila (según resoluciones).  
