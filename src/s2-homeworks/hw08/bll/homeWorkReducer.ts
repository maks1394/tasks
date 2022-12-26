import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            switch (action.payload) {
                case "up":{
                    state.sort((a,b)=>a.name.localeCompare(b.name))
                    return [...state]
                }
                case "down":{
                    state.sort((a,b)=>b.name.localeCompare(a.name))
                    return [...state]
                }
                default:{
                    return state
                }
            }// need to fix
        }
        case 'check': {
            return state.filter(el=>el.age>=18) // need to fix
        }
        default:
            return state
    }
}
