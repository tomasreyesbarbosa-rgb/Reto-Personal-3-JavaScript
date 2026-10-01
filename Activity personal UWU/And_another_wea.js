const cuentaBancaria = {
    nombre: "Tomas Reyes Barbosa",
    saldo: 100000000,
    movimientos: [],

    formatear: function(monto) {
        let texto = Number(monto).toLocaleString('es-CO');
        if (monto >= 1000000) {
            texto = texto.replace(".", "'");
        }
        return `$${texto}`;
    },

    depositar: function(monto) {
        this.saldo += monto;
        const montoformateado = this.formatear(monto);
        const saldoformateado = this.formatear(this.saldo);
        this.movimientos.push(`Depositos: ${montoformateado}`);
        console.log(`Has depositado: ${montoformateado}. Nuevo saldo: ${saldoformateado}`);
    },

    retirar: function(monto) {
        if (monto > this.saldo) {
            const saldoformateado = this.formatear(this.saldo);
            console.log(`Fondos insuficientes. Saldo disponible: ${saldoformateado}`);
        } else {
            this.saldo -= monto;
            const montoformateado = this.formatear(monto);
            const saldoformateado = this.formatear(this.saldo);

            this.movimientos.push(`Retiro: -${montoformateado}`);
            console.log(`Retiro de ${montoformateado} exitoso. Saldo actual: ${saldoformateado}`);
        }
    },

    verHistorial: function() {
        console.log(`---Estado de Cuenta---`);
        console.log(`Nombre del propietario: ${this.nombre}`)
        console.log(`Su saldo actual es de: ${this.formatear(this.saldo)}`);
        console.log(`Movimientos realizados:`);
        if (this.movimientos.length === 0) {
            console.log("No hay movimientos registrados.")
        } else {
            this.movimientos.forEach((movimiento, indice) => {
                console.log(`${indice+1}. ${movimiento}`);
            });
        }
    }
};

cuentaBancaria.depositar(25000);
cuentaBancaria.retirar(100000);
cuentaBancaria.retirar(10000000000000000000000000);
cuentaBancaria.verHistorial()