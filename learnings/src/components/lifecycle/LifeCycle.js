import React, { Component } from 'react';

class LifeCycle extends Component {

    constructor(props){
        super(props);

        this.state ={
            name: 'Ejaz'
        }

        console.log("Constructor ")

    }

    static getDerivedStateFromProps(props, state){
        console.log("getDerivedStateFromProps ")
    }

    componentDidMount() {
        console.log("componentDidMount ");
    }
    
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default LifeCycle;