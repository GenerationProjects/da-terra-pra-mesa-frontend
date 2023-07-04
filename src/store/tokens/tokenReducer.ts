import { Action } from "./action";
import Produto from "../../models/Produto";

export interface TokenState {
  tokens: string,
  produtos: Array<Produto>
}

const initialState = {
  tokens: '',
  produtos: []
}

export const tokenReducer = (state: TokenState = initialState, action: Action) => {
  switch (action.type) {
    case 'ADD_TOKEN': {
      return { tokens: action.payload }
    }
    case 'ADD_TO_CART': {
      return {
        ...state, produtos: [...state.produtos, action.payload]
      }
    }
    case 'REMOVE_ITEM': {
      return {
        ...state, produtos: []
      }
    }
    default: return state
  }
}