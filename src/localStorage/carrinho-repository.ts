import { Pedido } from "../models/Pedido";

export function save(carrinho: Pedido) {
    const str = JSON.stringify(carrinho);
    localStorage.setItem("", str)
}

export function get(): Pedido {
    const str = localStorage.getItem("") || '{"itens"=[]}';
    return JSON.parse(str);
}
