import {createContext, useContext, useReducer} from "react";

const ThemeStateContext = createContext(null);
const ThemeDispatchContext = createContext(null);

function themeReducer(state, action) {
    // todo
}

const initialTheme = "#38d9a9";

export function ThemeProvider({children}) {
    const [state, dispatch] = useReducer(themeReducer, initialTheme);
    return (
        <ThemeStateContext.Provider value={state}>
            <ThemeDispatchContext.Provider value={dispatch}>
                {children}
            </ThemeDispatchContext.Provider>
        </ThemeStateContext.Provider>
    )
}

function throwCannotFindThemeProvider() {
    throw new Error('Cannot find ThemeProvider');
}

export function useThemeState() {
    const context = useContext(ThemeStateContext);
    if (!context) {
        throwCannotFindThemeProvider();
    }
    return context;
}

export function useThemeDispatch() {
    const context = useContext(ThemeDispatchContext);
    if (!context) {
        throwCannotFindThemeProvider();
    }
    return context;
}
