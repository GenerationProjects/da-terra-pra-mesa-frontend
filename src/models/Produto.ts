import Categoria from "./Categoria";

export default interface Produto {
    id: number;
    nome: string;
    preco: number;
    descricao: string;
    quantidade: number;
    imagem: string;
    categoria?: Categoria | null
}