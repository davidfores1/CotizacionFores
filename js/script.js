class Filas {

    constructor() {

        this.total = 0;
        this.suma = [];
        this.num;

        this.eventos();
    }

    eventos() {
        agregar.addEventListener("click", () => {

            this.agregarFila();

        });
        this.decimales();

    }

    agregarFila() {


        this.referencia = document.querySelector('#referencia').value;
        this.descripcion = document.querySelector("#descripcion").value;
        this.marca = document.querySelector("#marca").value;
        this.unidad = document.querySelector("#unidad").value;
        this.cantidad = document.querySelector("#cantidad").value;
        this.valor_unit = document.querySelector("#valor_unit").value;
        this.iva = document.querySelector("#iva").value;
        this.agregar = document.querySelector("#agregar")

        this.ValortotalIva();
        this.consecutivoFilas();

        var fila = "<tr><td>" + this.num + "</td><td>" + this.referencia + "</td><td>" + this.descripcion + "</td><td>" + this.marca + "</td><td>" + this.unidad + "</td><td>" + this.cantidad + "</td><td>" + this.iva + "%</td><td>$ " + this.valor_unit + "</td><td>$ " + this.total + "</td></tr>";
        var btn = document.createElement("TR");
        btn.innerHTML = fila;

        document.getElementById("tablita").appendChild(btn);
        document.getElementById("miForm").reset();


    }

    ValortotalIva() {

        if (this.iva == 0) {
            this.total = this.cantidad * this.valor_unit;

        } else {
            this.total = this.cantidad * this.valor_unit * this.iva;
        }
    }

    consecutivoFilas() {
        var all = 0;

        this.suma.push(this.total);

        for (let i of this.suma) {
            this.num = this.suma.length;
            all += i;
        }
        document.getElementById("valorT").value = all;
    }

//     decimales() {
//         var entrada = document.getElementById("valor_unit");
//         SimpleMaskMoney.setMask(entrada);

//     }

 }

new Filas();


//function agregarFila() {

    // var referencia = document.getElementById("referencia").value;
    // var descripcion = document.getElementById("descripcion").value;
    // var marca = document.getElementById("marca").value;
    // var unidad = document.getElementById("unidad").value;
    // var cantidad = document.getElementById("cantidad").value;
    // var valor_unit = document.getElementById("valor_unit").value;
    // var iva = document.getElementById("iva").value;
    // var num = 1;



//     valor_unit = valor_unit.replace(".", "");
//     //cambiamos la coma por un punto
//     valor_unit = valor_unit.replace(",", ".");
//     //listo
//     var valorU = parseFloat(valor_unit);

//     if (iva == 0) {
//         var total = cantidad * valorU;
//     } else {
//         var total = cantidad * valorU * iva;
//     }



//     var all = 0;

//     suma.push(total);
//     for (let i of suma) {
//         var no = suma.length;
//         all += i;
//     }

//     document.getElementById("valorT").value = all;


//     var fila = "<tr><td>" + no + "</td><td>" + referencia + "</td><td>" + descripcion + "</td><td>" + marca + "</td><td>" + unidad + "</td><td>" + cantidad + "</td><td>" + iva + "%</td><td>$ " + valor_unit + "</td><td>$ " + total + "</td></tr>";

//     var btn = document.createElement("TR");
//     btn.innerHTML = fila;
//     document.getElementById("tablita").appendChild(btn);
// }


// function limpiarFormulario() {
//     document.getElementById("miForm").reset();
//   }


// const suma = [];

// //var entrada = document.getElementById("valor_unit");
// //let input = SimpleMaskMoney.setMask(entrada);


// //var tl = document.getElementById("valorT");
// //let m = SimpleMaskMoney.setMask(tl);

// document.getElementById("agregar").addEventListener("click", function( event ) {
//     document.getElementById("miForm").reset();
//   }, false);