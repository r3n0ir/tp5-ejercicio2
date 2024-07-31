/* 
2- Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir 
alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual 
es el rasgo característico de esta generación.
esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
mostrarDatos: devuelve toda la información del objeto.
Luego crea la interfaz necesaria para que el usuario pueda crear un objeto persona, permitiendo ingresar las 
propiedades mediante un formulario, también agregar los botones “mostrar generación”, es “mayor de edad” e indicar 
en un alert el resultado de la función correspondiente.
*/

class Personas {
    #nombre;
    #edad;
    #dni;
    #sexo;
    #peso;
    #altura;
    #anioNac;
    constructor(nombre, edad, dni, sexo, peso, altura, nacimiento) {
        this.#nombre = nombre;
        this.#edad = edad;
        this.#dni = dni;
        this.#sexo = sexo;
        this.#peso = peso;
        this.#altura = altura;
        this.#anioNac = nacimiento;
    }
    get nombre() {
        return this.#nombre;
    }
    get edad() {
        return this.#edad;
    }
    get dni() {
        return this.#dni;
    }
    get sexo() {
        return this.#sexo;
    }
    get peso() {
        return this.#peso;
    }
    get altura() {
        return this.#altura;
    }
    get nacimiento() {
        return this.#anioNac;
    }
    mostrarGeneracion() {
        if (this.nacimiento >= 1930 && this.nacimiento <= 1948) {
            return `${this.nombre} pertence a la Silent Generation`
        } else if (this.nacimiento >= 1949 && this.nacimiento <= 1968) {
            return `${this.nombre} pertence a la Generacion Baby Bloom`
        } else if (this.nacimiento >= 1969 && this.nacimiento <= 1980) {
            return `${this.nombre} pertence a la Generacion X`
        } else if (this.nacimiento >= 1981 && this.nacimiento <= 1993) {
            return `${this.nombre} pertence a la Generacion Y`
        } else if (this.nacimiento >= 1994 && this.nacimiento <= 2010) {
            return `${this.nombre} pertence a la Generacion Z`
        }
    }
    esMayordeEdad() {
        return this.edad >= 18;
    }
    mostrarDatos() {
        return `Nombre: ${this.nombre}\nEdad: ${this.edad}\nDNI: ${this.dni}\nSexo: ${this.sexo}\nPeso: ${this.peso} kg\nAltura: ${this.altura}\nAño de nacimiento: ${this.nacimiento}`;
    }
}

let persona1;
document.getElementById('formulario').addEventListener('submit', (event) => {
    event.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const edad = parseInt(document.getElementById('edad').value);
    const dni = parseInt(document.getElementById('dni').value);
    const sexo = document.getElementById('sexo').value;
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const nacimiento = parseInt(document.getElementById('anioNac').value);
    persona1 = new Personas(nombre, edad, dni, sexo, peso, altura, nacimiento);
    console.log(persona1);
    //document.querySelector(".mt-1").innerHTML = persona1.mostrarDatos();
    const datos = document.querySelector(".mt-1");
    datos.innerHTML = ''
    const li = document.createElement('li');
    li.className = 'list-group-item';
    li.innerHTML = persona1.mostrarDatos();
    datos.appendChild(li);
});

document.querySelector(".btn-outline-light").addEventListener('click', function () {
    if (persona1.esMayordeEdad()) {
        alert(`${persona1.nombre} es mayor de edad`);
    } else {
        alert(`${persona1.nombre} es menor de edad`);
    }
});

document.querySelector(".btn-outline-primary").addEventListener('click', function () {
    const generacion = persona1.mostrarGeneracion();
    alert(generacion);
    console.log(generacion);
});
