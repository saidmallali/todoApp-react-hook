import {  useEffect, useReducer } from "react"


function useLocalStorageRducer(key, defaultVal, reducer) {

    

    const [state, dispatch] = useReducer(reducer, defaultVal, () => {
        let value; 
        try {
            value = JSON.parse(
                window.localStorage.getItem(key) || String(defaultVal)
            );
        } catch (e) {
            value = defaultVal;
        }

        return value
    });

    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(state));
    }, [key, state]);

    return [state, dispatch];
}


export default useLocalStorageRducer;