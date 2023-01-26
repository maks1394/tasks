const initState = 1 as number
type StateThemeType = typeof initState

type ActionThemeType = ChangeThemeIdType
export const themeReducer = (state = initState, action: ActionThemeType): StateThemeType => { // fix any

    switch (action.type) {

        case "SET_THEME_ID":{

            return action.id
        }
        default:
            return state
    }
}

type ChangeThemeIdType = ReturnType<typeof changeThemeId>
export const changeThemeId = (id: number) => {
    return { type: 'SET_THEME_ID', id } as const
} // fix any
