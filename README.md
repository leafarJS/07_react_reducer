# notas importantes del curso

**extraido de jonmircha.com**
Introducción
React es una biblioteca JavaScript altamente eficiente y declarativa que se utiliza para crear interfaces de usuario interactivas.

Fue creado por el ingeniero de Facebook Jordan Walke y se lanzó en mayo de 2013.

En los últimos años, ha superado a sus rivales y ha establecido firmemente su dominio.

React te insita a crear código declarativo (indicas el qué, no el cómo) y orientado a componentes.

Un componente es un pieza de código que puede representar una parte de la interfaz de usuario o una funcionalidad en particular que se puede encapsular y reutilizar en diferentes partes de un desarrollo o incluso en diferentes aplicaciones.

Cada componente reaccionará a cambios internos (en su estado) o externos (nuevas propiedades recibidas) y se volvera a redibujar (renderizado) en la interfaz. Para ello React utiliza su Virtual DOM que es una copia del DOM original del navegador para sólo hacer los cambios necesarios en los nodos que hayan reaccionado y evitar redibujar todo el árbol del DOM.

Para poder interactuar con la interfaz React tiene eventos sintéticos que son una abstracción de los eventos nativos de los navegadores, para mejorar la compatibilidad y evitar el uso de librerías para crossbrowsing (bye bye jQuery 🤭).

¿Por qué usarlo?
Ventajas:
Alto rendimiento: React es conocido por su alta eficiencia y flexibilidad. Se puede integrar fácilmente con diferentes tecnologías. Se puede usar tanto para el lado del cliente como para el lado del servidor.
Recursos abundantes : como Facebook la mantiene, existe una gran cantidad de documentación y recursos disponibles en la web que hace que la curva de aprendizaje sea muy fluida.
Compatibilidad con versiones anteriores : la transición o migración de versiones anteriores a nuevas es bastante fácil y retrocompatible.
Estructura de componentes fácil de mantener: la arquitectura basada en componentes de React ayuda a aumentar la reutilización del código y facilita bastante el mantenimiento de proyectos a gran escala.
Fuerte Comunidad: React tiene más de 1300 colaboradores en GitHub.
Documentación Multi idioma: Actualmente React tiene su documentación en diferentes idiomas entre ellos el español.
Flujo de datos unidireccional: el enlace de datos unidireccional y hacia abajo (de componentes padres a hijos), ayuda a garantizar que los cambios realizados en la estructura del componente hijo no afecten la estructura del componente padre.
Desventajas:
Complejo: muchos desarrolladores pueden encontrar en un inicio demasiado compleja la curva de aprendizaje de React en comparación con otros frameworks como el caso de Vue. Dicha complejidad puede ser innecesaria para proyectos a pequeña escala.
JSX: el uso de JSX agrega otra capa de complejidad. JSX es un preprocesador que agrega extensión de sintaxis XML a JavaScript. Aunque JSX ayuda a codificar el código React de una manera más segura y rápida, puede ser difícil de comprender para los nuevos desarrolladores.
Necesidad de un ecosistema de muchas herramientas: React requiere una amplia gama de herramientas para funcionar correctamente y ser compatible con otras tecnologías.
Problemas de SEO: se sabe que las SPAs (Single Page Applications) creadas con React se enfrentan a problemas de indexación por parte de los rastreadores y bots de motores de búsqueda.
¿Quién lo usa?
Grandes empresas como Netflix, Yahoo, Airbnb, Instagram, Facebook, WhatsApp, PayPal, Microsoft, la BBC, Aeroméxico, etc. Incluso grandes sitios de información y noticias que antes usaban WordPress se están migrando a sitios hechos con JAM stack y React como librería principal, tal es el caso de Smashing Magazine.

Estadísticas que respaldan su uso:
Google Trends.
NPM Trends.
Stack Overflow Trends.
State of JavaScript.
Entorno y Herramientas de Desarrollo.
React es una librería y no técnicamente un framework. Por lo que sólo maneja la capa de Vista, tomando como referencia el modelo MVC (Modelo Vista Controlador) para el desarrollo de aplicaciones web. Sin embargo cuenta con una amplia gama de herramientas, librerías y frameworks para complementar su entorno de desarrollo, por ejemplo:

Node.js y NPM: Para ejecutar el entorno de desarrollo e instalar dependencias.
Yarn: Un gestor de paquetes JavaScript.
Webpack: Es un empaquetador de archivos para aplicaciones JavaScript.
React Router: Librería para manejar rutas declarativas.
Redux: Es una librería para gestionar el estado de las aplicaciones JavaScript.
Flux: Es la arquitectura de aplicaciones que Facebook usa para crear aplicaciones web del lado del cliente.
Create React App: Un conjunto de configuraciones preestablecidadas para comenzar a trabajar con React ejecutando un sólo comando.
Gatsby: Es un framework basado en React para desarrollar rápidamente sitios y aplicaciones web, usando diferentes fuentes de datos como CMS, Markdowns, APIs, etc.
Next.js: Es un framework basado en React para desarrollar sitios estáticos y aplicaciones del lado del servidor (SSR - Server Side Rendering).
GraphQL: Es un lenguaje de consulta de datos para APIs.
React Bootstrap: Es la versión del popular framework frontend Bootstrap pero creado con componentes hechos en React.
Material UI: Es un framework frontend inspirado en Material Design creado con componentes hechos en React.
React Native: Es un framework basado en React para la creación de aplicaciones móviles y nativas.
React Dev Tools Chrome: Es una extensión para Chrome que agrega de herramientas de depuración para React.
React Dev Tools Firefox: Es una extensión para Firefox que agrega de herramientas de depuración para React.
Simple React Snippets for VSCode: Es una extensión para Visual Studio Code que nos permite usar atajos para agilizar la escritura de código React.

Create React App
Aunque existen varias formas de empezar con React, una manera sencilla y eficiente es con create-react-app, una aplicación de consola que nos va a permitir crear aplicaciones React con cero configuración, lo que nos permitirá centrarnos en los más importante: Programar en React.

Para crear una aplicación utilizamos el comando npx create-react-app seguido del nombre que le quieras dar a tu aplicación. Por ejemplo:

npx create-react-app my-app
Cuando ejecutas ese comando create-react-app va a crear una carpeta llama my-app con una serie de archivos y subcarpetas para que puedas empezar a trabajar en tu proyecto.

Ingresa a la carpeta my-app y ejecuta el proyecto con los siguientes comandos:

cd my-app
npm start

El último comando ejecuta el servidor de desarrollo y abre un navegador con una pantalla de bienvenida.

¡Felicidades!, has creado tu primera aplicación con React.

¿Qué incluye create-react-app?
Un proyecto creado con create-react-app, además de React, incluye librerías como:

Webpack: que se encarga de procesar y empaquetar nuestro código JavaScript (con sus dependencias), archivos CSS y otros archivos estáticos como imágenes, vectores, fuentes, etc.
Babel: que nos permite usar nuevas características de ECMAScript.
PostCSS que es una librería para el procesamiento de CSS.
Jest que es una librería para testing.
etc.
Uno podría configurar un proyecto de React manualmente e incluir cada una de estas librerías, pero es bastante engorroso, create-react-app nos hace la vida más fácil.

Estructura de carpeta
create-react-app crea la siguiente estructura de archivos y carpetas:

my-app/
README.md
node_modules/
package.json
public/
index.html
favicon.ico
src/
App.css
App.js
App.test.js
index.css
index.js
logo.svg
Los dos archivos más importantes son:

public/index.html - la plantilla HTML de la aplicación.
src/index.js - el punto de entrada JavaScript de la aplicación.
Puedes eliminar o renombrar otros archivos según tus necesidades.

Dentro de src se incluyen todos los archivos JavaScript y CSS de tu aplicación.

También es recomendable incluir otros archivos estáticos como imágenes y fuentes en esta carpeta. Puedes crear subcarpetas para organizar mejor los archivos.

En public van todos los archivos estáticos que necesites incluir en la plantilla public/index.html.

Puedes crear otras carpetas además de src y public. Estas carpetas no van a ser incluídas en el paquete de distribución.

Scripts
En la carpeta del proyecto puedes ejecutar los siguientes comandos:

npm start - inicia el servidor de desarrollo y abre un navegador con la aplicación.
npm test - ejecuta las pruebas.
npm run build - empaqueta la aplicación para producción en la carpeta build.
npm run eject - permite cambiar manualmente las librerías y configuración que utiliza create-react-app por defecto. Ten cuidado con este comando, una vez que se expulsa la configuración inicial no hay vuelta atrás.
Hot reloading

Una de las funcionalidades más importantes de los proyectos creados con create-react-app es la capacidad de hacer cambios en vivo sin necesidad de reiniciar el servidor. Si haces un cambio en algún archivo en src o public el navegador se refresca automáticamente.

JSX
Es una extensión de la sintaxis de JavaScript que produce elementos de React.

Se puede usar:

Dentro de estructuras de control como if y for.
Asignarlo a variables.
Aceptarlo como argumento o retorno en funciones.
Expresiones JavaScript.
Veamos un ejemplo tomado del código que genera create-react-app:

<div className="App">
  <header className="App-header">
    <img src="{logo}" className="App-logo" alt="logo" />
    <h1 className="App-title">Welcome to React</h1>
  </header>
  <p className="App-intro">
    To get started, edit <code>src/App.js</code> and save to reload.
  </p>
</div>

JSX es similar a HTML pero con algunas diferencias importantes:

Algunas reglas importantes:

Toda etiqueta debe cerrarse por ejemplo <br> debera cerrarse a <br/>.
Los componentes deben devolver un sólo elemento padre.
Algunos atributos HTML cambian como:
class por className.
for por htmlFor.
Los atributos de un elemento JSX pueden aceptar valores de tipo String entrecomillados o expresiones JavaScript entre llaves, por ejemplo:
<img alt="Avatar" src={user.avatarURL} />
JSX se transforma en JavaScript
Por debajo JSX se transforma en código JavaScript. Por ejemplo, el siguiente código JSX.

<div class="active">Hola Mundo</div>
se transforma en el siguiente código JavaScript:

React.createElement("div", { className: "active" }, "Hola mundo");
Puedes utilizar el REPL de Babel para ver en qué se convierte el código JSX que escribes.

La ventaja de JSX es que, como es JavaScript, podemos:

Ver algunos errores en tiempo de compilación.

Asignar JSX a variables. Por ejemplo:

const el = <p>Hola</p>;
Retornar JSX desde métodos. Por ejemplo:

renderText() {
if (someCondition) {
return <p>Hola</p>;
} else {
return <p>Mundo</p>;
}
}
Una restricción de JSX es que siempre debes tener un elemento raíz:

const el = (

  <div>
    <p>Hola</p>
    <p>Mundo</p>
  </div>
);
Este es un patrón muy común en las aplicaciones de React.

Mezclando JSX con JavaScript
Para mezclar código JavaScript en JSX utiliza corchetes ({}):

const style = "active";
const title = "Hola Mundo";

<div className={style}>{title}</div>;
Una restricción de JSX es que no puedes utilizar if, else, while o for.

Para agregar condicionales utiliza el operador ternario:

<div>
  {
    condition
      ? <h1>Hola Mundo</h1>
      : null
  }
</div>
Para mostrar elementos de un arreglo o un objeto utiliza map:

const names = ["Jon", "Irma", "kEnAi"];

const jsx = (

  <ul>
    {names.map((name, index) => (
      <li key={index}>{name}</li>
    ))}
  </ul>
);
Estilos CSS inline en JSX
Es posible definir y utilizar estilos inline en JSX:

let styles = {
borderColor: "#999",
};

const jsx = <div style={styles}>Hola mundo</div>;
Eventos del DOM en JSX
En JSX se utilizan los eventos estándar del DOM como onclick, onchange, onkeydown, ... pero utilizando camelCase: onClick, onChange, onKeyDown, ...

<button onClick={alert("Hola")}></button>
Fíjate que utilizamos corchetes ({}) para escribir nuestro código JavaScript.

También podríamos pasar una función que es invocada cuando se genere el evento:

const saludar = () => alert("Hola!");

<button onClick={saludar}></button>;
Fíjate que no estamos invocando la función saludar, sólo la estamos pasando para que React la invoque cuando ocurra el evento.

Componentes
En React se introduce el concepto de componentes para crear la interfaz gráfica de nuestra aplicación.

Permiten separar el código y los elementos de la interfaz en pequeñas piezas independientes y reutilizables que estarán aisladas una de otras.

El objetivo es que cada componente sea independiente y encapsule su marcado, estilos y estado. De esa forma los componentes pueden ser reutilizables y la interfaz gráfica más fácil de mantener y evolucionar.

Se le pueden pasar datos a un componente a través de algo llamado props y devuelven a React elementos que describen lo que debe verse en pantalla.

En React los datos fluyen de forma unidireccional, de componentes padres a componentes hijos.

React te permite definir componentes como clases o como funciones.

Tipos de Componentes
Como una clase que extiende de Component con un método render:

import React, { Component } from "react";

class Title extends Component {
render() {
return <h1>Hola mundo</h1>;
}
}
O como una función que retorna lo que se va a renderizar:

const Title = () => {
return <h1>Hola Mundo</h1>;
};
Utilizando un componente
Para utilizar un componente debes importarlo y después incluirlo en tu JSX como se muestra en el siguiente ejemplo:

import React from "react";
import Title from "./Title";

function App {
return <Title />;
}

Propiedades
Son valores que recibe un componente hijo de uno padre. Se agrupan en un objeto llamado props, el cual puede recibir diferentes tipos de datos, como:

Strings
Numbers
Booleans
Arrays
Objects
Functions
React Elements
React Components
Las props son inmutables, es decir, son valores de sólo lectura, no se pueden modificar.

El componente las recibe como atributos que se pasan a través de JSX.

Por ejemplo, podemos pasar un atributo name al componente Welcome:
<Welcome name="Jon" />
<Welcome name="Irma" />

Si defines el componente en una clase, las props se reciben en el constructor de la clase:

class Welcome extends Component {
constructor(props) {
super(props);
}

render() {
return <h1>{this.props.name}</h1>;
}
}
Si defines el componente como una función, las props se reciben como un parámetro de la función:

const Welcome = (props) => {
return <h1>{props.name}</h1>;
};

Estado
El state son los valores internos que manejan la lógica y los datos de un componente, permite que éste reaccione a cualquier cambio lo que hará que se vuelva a renderizar en la interfaz.

--El estado tiene 3 características importantes:

-Es inmutable.
-No se puede modificar directamente.
-Es asíncrono.
-Para hacer cambios hay que hacer uso del método setState().

El estado de un componente no es accesible desde otro componente excepto de aquel que lo posee y lo asigna.

La propagación del estado fluye de forma unidireccional y descendiente (hacia abajo), esto significa que un componente padre puede pasar valores de su estado a componentes hijos que lo recibirán como propiedades.

En el momento que los valores del estado del padre sufran cambios esto causará que tanto el padre como los hijos que recibieron esos valores como propiedades se rendericen nuevamente y reaccionen a dicho cambio.

Cada componente que se defina como una clase cuenta con un objeto para almacenar información llamado state.

Cada vez que cambia el state React vuelve a renderizar (pintar) el componente en la vista.

class Welcome extends Component {
constructor() {
super();

    this.state = {
      title: "Hola Mundo",
    };

}
render() {
return <h1>{this.state.title}</h1>;
}
}

En este ejemplo estamos definiendo una componente Welcome que inicializa el estado con una llave title. En el método render estamos obteniendo el valor de esa llave con this.state.title.

Para cambiar el estado utiliza el método setState:

this.setState({
title: "Hello World",
});
🔼

Renderizado condicional
En React, puedes crear distintos componentes que encapsulan el comportamiento que necesitas. Entonces, puedes renderizar solamente algunos de ellos, dependiendo del estado de tu aplicación.

El renderizado condicional en React funciona de la misma forma que lo hacen las condiciones en JavaScript. Puedes usar el condicional if o el operador ternario para crear elementos dinámicamente en base al valor del estado o las propiedades que recibe el componente.

Considera estos dos componentes:

function SaludoUsuario(props) {
return <h1>¡Bienvenid@ nuevamente!</h1>;
}
function SaludoInvitado(props) {
return <h1>Por favor, regístrate.</h1>;
}
Vamos a crear un componente Saludar que muestra cualquiera de estos componentes dependiendo si el usuario ha iniciado sesión o no:

function Saludar(props) {
const isLoggedIn = props.isLoggedIn;

if (isLoggedIn) {
return <SaludoUsuario />;
}
return <SaludoInvitado />;
}

ReactDOM.render(
// Intentar cambiando isLoggedIn={true}:
<Saludar isLoggedIn={false} />,
document.getElementById("root")
);
Con el operador ternario el código quedaría de la siguiente manera:

function Saludar(props) {
const isLoggedIn = props.isLoggedIn;

return isLoggedIn ? <SaludoUsuario /> : <SaludoInvitado />;
}

ReactDOM.render(
// Intentar cambiando isLoggedIn={true}:
<Saludar isLoggedIn={false} />,
document.getElementById("root")
);
🔼

Renderizado de elementos
Puedes hacer colecciones de elementos e incluirlos en JSX usando llaves {}.

Recorriendo los elementos de un array y usando la función map() de Javascript.

Por ejemplo:

const numeros = [1, 2, 3, 4, 5];
const listaElementos = numeros.map((numero) => <li>{numero}</li>);
Incluimos el array listaElementos dentro de un elemento <ul>, y lo renderizamos en el DOM:

ReactDOM.render(<ul>{listaElementos}</ul>, document.getElementById("root"));
Refactorizamos el ejemplo anterior en un componente que acepte un array de numeros e imprima una lista de elementos.

function ListaNumeros(props) {
const numeros = props.numeros;
const listaElementos = numeros.map((numero) => <li>{numero}</li>);
return <ul>{listaElementos}</ul>;
}

const numeros = [1, 2, 3, 4, 5];
ReactDOM.render(
<ListaNumeros numeros={numeros} />,
document.getElementById("root")
);
Al ejecutar este código, serás advertido que una key debería ser proporcionada para elementos de lista.

Una “key” es un atributo especial de tipo string que debes incluir al crear listas de elementos.

Las keys ayudan a React a identificar que elementos han cambiado, son agregados, o son eliminados. Las keys deben ser dadas a los elementos dentro del array para darle una identidad estable.

La mejor forma de elegir una key es usando un string que identifique únicamente a un elemento de la lista entre sus hermanos. Habitualmente vas a usar los IDs de tus datos como key.

Cuando no tengas IDs estables para renderizar, puedes usar como key el índice de los elementos del array de datos como último recurso.

Las keys usadas dentro de arrays deberían ser únicas entre sus hermanos. Sin embargo, no necesitan ser únicas globalmente. Podemos usar las mismas keys cuando creamos dos o más arrays diferentes.

Entonces refactorizando nuestro código anterior quedaría así:

function ListaNumeros(props) {
const numeros = props.numeros;
const listaElementos = numeros.map((numero, indice) => (

<li key={indice}>{numero}</li>
));
return <ul>{listaElementos}</ul>;
}

const numeros = [1, 2, 3, 4, 5];
ReactDOM.render(
<ListaNumeros numeros={numeros} />,
document.getElementById("root")
);
🔼

Eventos
Manejar eventos en React es muy similar a manejar eventos en el DOM. Sin embargo existen algunas diferencias de sintaxis:

Los eventos de React se nombran usando camelCase, en vez de minúsculas.
Con JSX pasas una función como el manejador del evento, en vez de un string.
Ejemplo, en HTML:

<button onclick="cambiarIdioma()">Cambiar idioma</button>
Ejemplo, en React:

<button onClick="{cambiarIdioma}">Cambiar idioma</button>
Otra diferencia es que en React no puedes retornar false para prevenir el comportamiento por defecto. Debes, explícitamente, llamar preventDefault.

Por ejemplo, en nuestro ejemplo del componente Welcome visto en el tema del Estado podemos cambiarlo para que cuando hagan click sobre el h1 cambie el texto. Para eso vamos a definir un método updateText que vamos a invocar cuando hagan click sobre el h1:

class Welcome extends Component {
constructor() {
super();

    this.state = {
      title: "Hola Mundo",
    };

    // tenemos que enlazar el método al contexto actual
    this.updateText = this.updateText.bind(this);

}

updateText() {
this.setState({
title: "Hello World",
});
}

render() {
return <h1 onClick={this.updateText}>{this.state.title}</h1>;
}
}
🔼

Comunicación entre componentes
Tenemos 3 casos de comunicación entre los componentes de React:

Comunicación entre un componente padre a uno hijo.
Comunicación entre un componente hijo y su padre.
Comunicación entre componentes no relacionados.
Comunicación entre un componente padre a uno hijo
Éste es el caso más natural en el mundo de React y se hace a través del paso de props de un componente padre a uno hijo.

import React, { Component } from "react";

class Padre extends Component {
render() {
return (

<div>
<Hijo mensaje="Mensaje para el hijo 1" />
<Hijo mensaje="Mensaje para el hijo 2" />
</div>
);
}
}

function Hijo(props) {
return <h2>{props.mensaje}</h2>;
}

export default Padre;
Comunicación entre un componente hijo y su padre
Cuando tenemos la necesidad de que un componente hijo mande datos a su padre los podemos hacer a traves de los eventos, simplemente pasamos una función como prop del componente padre al componente hijo, y éste ejecutará la función .

En este ejemplo, cambiaremos el estado del componente padre pasando una función al componente hijo e invocando esa función dentro del componente hijo.

import React, { Component } from "react";

class Padre extends Component {
constructor(props) {
super(props);
this.state = { contador: 0 };

    this.incrementarContador = this.incrementarContador.bind(this);

}

incrementarContador(e) {
//el contexto del evento proviene del Hijo
this.setState({ contador: this.state.contador++ });
}

render() {
return (

<div>
<Hijo
          mensaje="Mensaje para el hijo 1"
          incrementarContador={incrementarContador}
        />
<Hijo
          mensaje="Mensaje para el hijo 2"
          incrementarContador={incrementarContador}
        />
</div>
);
}
}

function Hijo(props) {
return (

<div>
<h2>{props.mensaje}</h2>
<button onClick={props.incrementarContador}>+</button>
</div>
);
}

export default Padre;
Comunicación entre componentes no relacionados
Si los componentes no tienen una relación padre-hijo o están relacionados, pero están demasiado lejos, como por ejemplo, un bisnieto o tataranieto, tenemos que crear un mecanismo de observación y/o suscripción para la comunicación entre dichos componentes.

Al menos existen 3 patrones para hacer esto.

Patrón Emisor de eventos / Destino / Despachador : los oyentes deben hacer referencia a la fuente para suscribirse.
Patrón Publicación / Suscripción: no necesita una referencia específica a la fuente que desencadena el evento, hay un objeto global accesible en todas partes que maneja todos los eventos.
Patrón Señales: similar al Emisor de Eventos, pero aquí no usa cadenas aleatorias. Cada objeto que podría emitir eventos debe tener una propiedad específica con ese nombre. De esta manera, se sabe exactamente qué eventos puede emitir un objeto.
Portales: proporcionan una opción de primera clase para renderizar hijos en un nodo DOM que existe por fuera de la jerarquía del DOM del componente padre.
Puedes encontrar más información al respecto en este enlace.

Otra manera de compartir datos entre componentes sin que tengan una relación padre-hijo es compartiendo un estado global accesible para todos los componentes de nuestra aplicación, para ello podríamos usar 2 opciones:

Redux: librería externa a React para el manejo del estado.
Context: un API interna de React que provee una forma de pasar datos a través del árbol de componentes sin tener que pasar props manualmente en cada nivel. Esta API la retomaremos cuando veamos el tema de Hooks.
🔼

Ciclo de Vida
Son métodos que se ejecutan automáticamente en un Componente de Clase, ocurren en 3 fases:

Montaje.
Actualización.
Desmontaje
Montaje
Estos métodos se ejecutan cuando se crea un componente y se inserta en el arbol del DOM.

constructor(): Se ejecuta al crear la instancia del componente, en el constructor puedes inicializar el estado y enlazar manejadores de eventos.
render(): Es el único método requerido, cuando se ejecuta, examina el estado y las propiedades y dibuja el componente en el árbol del DOM.
componentDidMount(): Se invoca inmediatamente después de que un componente se ha insertado al árbol del DOM. Es útil para ejecutar suscripciones o peticiones asíncronas a API's, bases de datos, servicios, etc.
Actualización
Estos métodos son ejecutados por cambios en el estado o las propiedades de los componentes.

render(): redibuja el componente cuando detecta cambios en el estado o las propiedades del componente.
componentDidUpdate(): Se ejecuta inmediatamente después de que la actualización del estado o las propiedades sucede, al igual que componenDidUpdate es un método ideal para hacer peticiones externas.
Desmontaje
Estos métodos son ejecutados una vez que el componente ha sido eliminado del árbol del DOM.

componentWillUnmount(): Se ejecuta antes de destruir el componente del árbol del DOM, es un método útil para hacer tareas de limpieza.
🔼

Hooks
Los Hooks son una nueva incorporación a partir de React 16.8.0, que nos permiten "enganchar" el estado y el ciclo de vida en componentes basados en funciones.

¿Por qué se crearon los Hooks?
Las clases confunden a las personas y a las máquinas.

Entender la estructura y reglas que implican crear una clase puede ser una curva de aprendizaje lenta y requerir de ciertos conceptos, como el manejo de this en JavaScript, por el contrario las funciones son muy fáciles de entender y manipular incluso para personas que van comenzando.

A las máquinas tampoco les gusta las clases ya que no minifican tan bien como las funciones, esto significa que nuestro código ocupará más texto y por ende más espacio de almacenamiento.

Preguntas frecuentes
¿Los hooks hacen que mi aplicación sea más rápida? NO.
¿Los hooks hacen algo que un Componente de Clase no pueda hacer? NO.
¿Los Componentes de Clase van a desaparecer? NO.
¿Mi conocimiento del estado, las propiedades y los eventos serán obsoleto ahora con hooks? NO.
¿Debo reescribir todas mis aplicaciones React, ahora con hooks? Probablemente NO.
¿Debo implementar hooks en mi próximo proyecto? Probablemente SÍ.
Tipos de Hooks
Básicos (en el 100% de tus proyectos):
useState.
useEffect.
Avanzados (tal vez no en todos tus proyectos):
useContext.
useRef.
useReducer.
useCallback.
useMemo.
Puedes ver toda la lista de hooks disponibles en la documentación de React.

En este artículo explicaremos los hooks:

useState.
useEffect.
useState
Permite manipular el estado de un componente funcional, se comporta como el objeto state y a la función this.setState de los componentes de clase.

Para usarlo, debemos importarlo desde la librería de React.

import React, { useState } from "react";
Ahora, en nuestro componente funcional, vamos a inicializar el hook, para ello asignaremos mediante la destructuración de arreglos 2 elementos:

El valor del estado y,
Un método para actualizarlo
Adicionalmente le pasaremos como parámetro el valor inicial del estado al método useState.

import React, { useState } from "react";

export default function Componente() {
const [valor, setValor] = useState(0);

return <span>El valor del componente es {valor}</span>;
}
Para actualizar el estado tenemos que utilizar el método resultante de la destructuración de useState y pasarle el nuevo valor.

import React, { useState } from "react";

export default function Componente() {
const [valor, setValor] = useState(0);
return (

<div>
<span>El valor del componente es {valor}</span>
<button onClick={() => setValor(valor + 1)}>Aumentar valor</button>
</div>
);
}
Un detalle del estado en los Hooks, es que no debe ser tratado como un objeto como en los componentes de clases, si necesitas más de un valor cada uno debe ser almacenado en una variable diferente y usar la destructurción de useState.

import React, { useState } from "react";

export default function Componente() {
const [valor, setValor] = useState(0);
const [valor2, setValor2] = useState("Hola Mundo");
const [valor3, setValor3] = useState(true);

return (

<div>
<span>El valor del componente es {valor}</span>
<button onClick={() => setValor(valor + 1)}>Aumentar valor</button>
</div>
);
}
useEffect
Permite hacer uso del ciclo de vida en un componente funcional. Usar useEffect equivale a la combinación de los métodos:

componentDidMount() (montaje).
componentDidUpdate() (actualización).
componentWillUnmount() (desmontaje).
useEffect recibe como parámetro una función que se ejecutará cada vez que nuestro componente se renderice, ya sea por cambios del estado o las propiedades.

Para usarlo, debemos importarlo desde la librería de React.

import React, { useEffect } from "react";
Para añadir un efecto que se ejecutará cada vez que nuestro componente se renderice, se debe pasar como parámetro una función al hook useEffect misma que se ejecutará al renderizarse el componente.

import React, { useEffect } from "react";

export default function Efecto() {
useEffect(function () {
console.log("Me he renderizado!!!");
});

return <span>Este es un ejemplo del hook useEffect.</span>;
}
Con useEffect también podemos suscribirnos y desuscribirnos a eventos, temporizadores, servicios, API's, etc.

Para ello hay que escribir el código de la suscripción en el cuerpo de la función de useEffect y para evitar problemas de rendimiento o aumento indiscriminado de la memoria y recursos de nuestra aplicación retornar en una función el código que desuscriba o cancele lo que se ejecuto en el cuerpo de la función.

import React, { useEffect, useState } from "react";

export default function ScrollYNavegador() {
const [scrollY, setScrollY] = useState(0);

useEffect(() => {
//Creamos una función para actualizar el estado
const actualizarScrollY = () => {
let scrollY = window.pageYOffset;
console.log(`scrollY: ${scrollY}`);
setScrollY(scrollY);
};
//Actualizamos el scroll al montar el componente
actualizarScrollY();
//Nos suscribimos al evento scroll de window
window.addEventListener("scroll", actualizarScrollY);

    //Devolvemos una función para desuscribir el evento
    return () => {
      window.removeEventListener("scroll", actualizarScrollY);
    };

});

return (

<div>
<span>ScrollY del Navegador: {scrollY}px</span>
</div>
);
}
Por defecto los efectos se ejecutan cada vez que se realiza un renderizado, si queremos evitar actualizaciones innecesarias o indiscriminadas podemos pasarle un segundo parámetro al hook.

El parámetro debe ser un array con todos los valores de los que dependerá el efecto, de forma que sólo se ejecutará cuando ese valor cambie.

import React, { useEffect, useState } from "react";

export default function ScrollYNavegador() {
const [scrollY, setScrollY] = useState(0);

useEffect(() => {
//Creamos una función para actualizar el estado
const actualizarScrollY = () => {
let scrollY = window.pageYOffset;
console.log(`scrollY: ${scrollY}`);
setScrollY(scrollY);
};
//Actualizamos el scroll al montar el componente
actualizarScrollY();
//Nos suscribimos al evento scroll de window
window.addEventListener("scroll", actualizarScrollY);

    //Devolvemos una función para desuscribir el evento
    return () => {
      window.removeEventListener("scroll", actualizarScrollY);
    };

}, [scrollY]);

return (

<div>
<span>ScrollY del Navegador: {scrollY}px</span>
</div>
);
}
Si le pasamos un array vacío, eso hará que el efecto no dependa de ningún valor, por lo que sólo se ejecutará al montarse y desmontarse el componente.

import React, { useEffect, useState } from "react";

export default function ScrollYNavegador() {
const [scrollY, setScrollY] = useState(0);

useEffect(() => {
//Creamos una función para actualizar el estado
const actualizarScrollY = () => {
let scrollY = window.pageYOffset;
console.log(`scrollY: ${scrollY}`);
setScrollY(scrollY);
};
//Actualizamos el scroll al montar el componente
actualizarScrollY();
//Nos suscribimos al evento scroll de window
window.addEventListener("scroll", actualizarScrollY);

    //Devolvemos una función para desuscribir el evento
    return () => {
      window.removeEventListener("scroll", actualizarScrollY);
    };

}, []);

return (

<div>
<span>ScrollY del Navegador: {scrollY}px</span>
</div>
);
}

/_-----------------------------_/
import React, { Component } from "react";

//TODO: Componente con una función declarada
const Componente = (props) => <h2>{props.msg}</h2>;

//TODO: Componente funcional
// function Componente(props) {
// return <h2>{props.msg}</h2>;
// }

//TODO: Componente de class comienza por defecto con un render()
// class Componente extends Component {
// render() {
// return <h2>{this.props.msg}</h2>;
// }
// }
export default Componente;

//App.js

<section>
        <Component msg="Primer Componente con React" />
        <Component msg="Segundo Componente con props" />
</section>
/_-----------------------------_/
