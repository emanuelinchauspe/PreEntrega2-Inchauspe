let inicio;
let subtotal = 0;
let valorFinal = 0;

class Servicios {
    service;
    valor;
    editorial;

    constructor(service, valor, editorial) {
        this.service = service;
        this.valor = valor;
        this.editorial = editorial;
    }
}

class ItemFactura {
    service;
    valor;
    cantidad;
    subtotal;

    constructor(service, valor, cantidad, subtotal) {
        this.service = service;
        this.valor = valor;
        this.cantidad = cantidad;
        this.subtotal = subtotal;
    }
}

const producto1 = new Servicios('Luz', 9500, 'EDEA');
const producto2 = new Servicios('Gas', 3200, 'Camuzzi');
const producto3 = new Servicios('Agua', 900, 'ABSA');
const producto4 = new Servicios('Internet', 4200, 'Loganet');
const producto5 = new Servicios('Colegio', 21500, 'CJN')
const producto6 = new Servicios('Seguro Automotor', 13200, 'Federación Patronal')

const catalogo = [producto1, producto2, producto3, producto4, producto5, producto6];
const catalogoString = catalogo.map((producto, index) => `${index + 1} - ${producto.service}:  $${producto.valor}.\n`);

const arrayItems = [];

function totalServicios(valor, cantidad) {
    valorFinal += valor * cantidad;
    return valorFinal;
}

function carrito() {
    let eleccion = parseInt(prompt('Escoja un servicio a pagar:\n' + catalogoString.join('')));
    while (eleccion <= 0 || eleccion > catalogo.length) {
        eleccion = parseInt(prompt('El valor escogido es incorrecto. Escoja un servicio de la lista:\n' + catalogoString.join('')));
    }

    let cantidad = parseInt(prompt('Cuántos meses desea pagar?'));
    while (cantidad <= 0) {
        cantidad = parseInt(prompt('El valor ingresado no es válido. Por favor, introduzca un número mayor a cero:'));
    }

    subtotal = catalogo[eleccion - 1].valor * cantidad;
    const nuevoItem = new ItemFactura(catalogo[eleccion - 1].service, catalogo[eleccion - 1].valor, cantidad, subtotal);
    arrayItems.push(nuevoItem);
    valorFinal += subtotal;

    let seguir = prompt('Servicio agregado. ¿Desea seguir agregando? Ingrese si o no.');
    validarInicio(seguir);
}

function validarInicio(respuesta) {
    while (respuesta.toLowerCase() !== 'no' && respuesta.toLowerCase() !== 'si') {
        respuesta = prompt('Por favor, responda con SI o NO:');
    }

    if (respuesta.toLowerCase() === 'si') {
        carrito();
    } else {
        const stringItemFactura = arrayItems.map((item, index) => (index + 1) + ' - Servicio: ' + item.service + ' | Precio: $' + item.valor + ' | Cantidad de boletas: ' + item.cantidad + ' | Subtotal: $' + item.subtotal);
        alert('COMPROBANTE DE PAGO\n\n' + stringItemFactura.join('\n\n') + '\n\n' + 'Total a pagar = $' + valorFinal + '.');
    }
}

inicio = prompt('Bienvenido a la central de pagos! \nDesea comenzar? Responda SI o NO');
validarInicio(inicio);

alert("Gracias por usar nuestra plataforma. ¡Hasta el próximo mes!")