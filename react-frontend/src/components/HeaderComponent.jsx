import React, { Component } from 'react';

class HeaderComponent extends Component {
    constructor(props){
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <div className="flex-box">
                            <h2 className="title">Employee!</h2 >
                        </div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default HeaderComponent;