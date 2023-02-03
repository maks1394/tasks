import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            switch (action.payload) {
                case "up": {
                    const copyState = [...state]
                    copyState.sort((a, b) => a.name.localeCompare(b.name))
                    return copyState
                }
                case "down": {
                    const copyState = [...state]
                    copyState.sort((a, b) => b.name.localeCompare(a.name))
                    return copyState
                }
                default: {
                    return state
                }
            }// need to fix
        }
        case 'check': {
            return state.filter(el => el.age >= 18) // need to fix
        }
        default:
            return state
    }
}
