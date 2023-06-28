export default interface UsuarioLogin {
    id: number,
    email: string,
    senha: string,
    token?: string | null
}