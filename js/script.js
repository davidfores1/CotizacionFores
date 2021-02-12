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
        //this.marca = document.querySelector("#marca").value;
        this.unidad = document.querySelector("#unidad").value;
        this.cantidad = document.querySelector("#cantidad").value;
        this.valor_unit = document.querySelector("#valor_unit").value;
        this.iva = document.querySelector("#iva").value;
        this.agregar = document.querySelector("#agregar")

        this.ValortotalIva();
        this.consecutivoFilas();

        var fila = "<tr><td> <input type='text' class='form-control numItem' name='numItem' value='" + this.num + "'></td><td><input type='text' class='form-control' name='referencia' size='15' value='" + this.referencia + "'></td><td><input type='text' class='form-control' name='descripcion' size='15' value='" + this.descripcion + "'></td><td><input type='text' class='form-control unidad' name='unidad' value='" + this.unidad + "'></td><td><input type='text' class='form-control cantidad' name='cantidad' value='" + this.cantidad + "'></td><td><input type='text' class='form-control numItem' name='iva' value='" + this.iva + "%'></td><td><input type='text' class='form-control valor_unit'name='valor_unit' value=' $" + this.valor_unit + "'></td><td><input type='text' class='form-control valor_unit'name='valor_unit' value=' $" + this.total + "'></td></tr>";
        var btn = document.createElement("TR");
        btn.innerHTML = fila;

        document.getElementById("tablita").appendChild(btn);
        document.getElementById("miForm").reset();


    }

    ValortotalIva() {

        if (this.iva == 0) {
            var valorU;

            valorU = this.valor_unit.replace('.', '')
            console.log(valorU);
            this.total = this.cantidad * valorU.replace(',', '');

        } else {
            valorU = this.valor_unit.replace('.', '')
            this.total = this.cantidad * valorU.replace(',', '') * this.iva;
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

    decimales() {
        var entrada = document.getElementById("valor_unit");
        SimpleMaskMoney.setMask(entrada);
    }

}

new Filas();