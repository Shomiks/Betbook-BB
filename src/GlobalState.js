import React from "react";
import App from "./App";

const poruka = '';
export const globalSate = React.createContext(poruka);

class GlobalState extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return<>
        <globalSate.Provider value='Vidi me tu sam'>
            <App/>
        </globalSate.Provider>
            </>
    }
}

export default GlobalState;