import { Pedido } from "../models/Pedido";
import * as carrinhoRepository from '../localStorage/carrinho-repository'
import Produto from "../models/Produto";

export function saveCarrinho(carrinho: Pedido) {
    carrinhoRepository.save(carrinho);
}

export function getCarrinho(): Pedido {
    return carrinhoRepository.get();
}

export function addProduto(produto: Produto) {
    const carrinho = carrinhoRepository.get();
    const item = carrinho.itens.find(prod => prod.produtoId === produto.id);
}