import axios from "axios";

export const api = axios.create({
    baseURL: "https://projeto-da-terra-pra-mesa.onrender.com"
})

export const login = async (url: any, dados: any, setDado: any) => {
    const resp = await api.post(url, dados)
    setDado(resp.data.token)
}

export const cadastroUsuario = async (url: any, dados: any, setDado: any) => {
    const resp = await api.post(url, dados)
    setDado(resp.data)
}