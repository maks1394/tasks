const initState = {
    isLoading: false,
}

export type StateType = typeof initState

type ActionLoadingType = LoadingActionType

export const loadingReducer = (state = initState, action: ActionLoadingType): { isLoading:boolean } => { // fix any
    switch (action.type) {
        // пишет студент  // need to fix
        case "CHANGE_LOADING":{
            debugger
            return {isLoading:action.isLoading}
        }
        default:
            return state
    }
}

type LoadingActionType = {
    type: 'CHANGE_LOADING'
    isLoading: boolean
}

export const loadingAC = (isLoading: boolean): LoadingActionType => ({
    type: 'CHANGE_LOADING',
    isLoading,
})
