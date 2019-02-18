import React, { Component } from 'react';
import MyRouter from "./MyRouter"

class App extends Component {
    render() {
        return (
            <>
                <header>Navigo Router</header>
                <section>
                    <MyRouter />
                </section>
            </>
        );
    }
}

export default App;
