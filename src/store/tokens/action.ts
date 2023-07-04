import Produto from "../../models/Produto"

export type Action = { type: "ADD_TOKEN" | 'REMOVE_ITEM' | 'ADD_TO_CART', payload: any }

export const addToken = (token: string): Action => ({ type: "ADD_TOKEN", payload: token })

export const addToCart = (id: Produto): Action => ({
    type: "ADD_TO_CART",
    payload: id
})

export const removeItem = (id: Produto[]): Action => ({
    type: "REMOVE_ITEM",
    payload: id
})