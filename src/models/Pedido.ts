export class Pedido {
    id?: number;
    itens: ItensPedido[] = [];
    get total(): number {
        let som = 0;
        this.itens.forEach(item => {
            som += item.subTotal;
        })
        return som;
    }
}
export class ItensPedido {
    constructor(
        public produtoId: number,
        public quantidade: number,
        public nome: string,
        public preco: number,
        public imgUrl: string
    ) { }
    get subTotal(): number {
        return this.preco * this.quantidade;
    }
}