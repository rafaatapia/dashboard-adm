export default class Ganho {
    constructor(
        id,
        usuario,
        tipoGanho,
        valor,
        pedido,
        pago
    ) {
        this.id = id;
        this.usuario = usuario;
        this.tipoGanho = tipoGanho;
        this.valor = valor;
        this.pedido = pedido;
        this.pago = pago;
    }

}