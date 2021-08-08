import React, { Component } from 'react'
import SingleContact from './SingleContact'
import AddContact from './AddContact'

export default class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: []
        };

    }

    //runs before it renders our component
    componentDidMount(){
        fetch('http://localhost:8080/api/contacts')
        //return response as json data
        .then(response => response.json())
        //insert json data into our state
        .then(data => this.setState({contacts: data}))
    }

    render() {
        return (
            <div>
                <div className="row">
                    <AddContact/>
                </div>
                <div className="row">
                    {this.state.contacts.map((item) => (
                        <SingleContact key={item.id} item={item}/>
                    ))}
                </div>
            </div>
        )
    }
}   
