const carro = {
    marca: "Toyota",
    modelo: "Raptor",
    encendido: false,

    encender: function() {
        this.encendido = true;
        console.log(`El ${this.marca} ${this.modelo} se ha encendido`);
    },

    estado: function() {
        if (this.encendido == true) {
            console.log(`El ${this.marca} ${this.modelo} esta actuamente encendido`);
        } else {
            console.log(`El ${this.marca} ${this.modelo} esta apagado :(`);
        }
    }
};

carro.estado();
carro.encender();
carro.estado();