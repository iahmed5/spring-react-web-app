import React, { Component } from 'react';

export default class AddContact extends Component {

    constructor(props) {
        super(props);

        this.state = {
            firstName: null,
            lastName: null,
            email: null
        }
    }

    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        console.log("myChangeHandler" + nam);
        this.setState({[nam]: val});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let contact = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
        }

        const jsonData = JSON.stringify(contact);
        fetch("http://localhost:8080/api/contacts", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: jsonData,
        })
            .then(function (res) {
                if (res.ok) {
                    alert("Perfect! ");
                } else if (res.status === 401) {
                    alert("Oops! ");
                }
            }, function (e) {
                alert("Error submitting form!" + e);
            });
            window.location.reload();
    }

    render() {
        return (
            <div className="row">
                <br />
                <form className="col s12" onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="input-field col s6">
                            <input name="firstName" type="text" defaultValue="User1" onChange={this.myChangeHandler} className="validate" />
                            <label htmlFor="firstName">First Name</label>
                        </div>
                        <div className="input-field col s6">
                            <input name="lastName" type="text" defaultValue="User" onChange={this.myChangeHandler} className="validate" />
                            <label htmlFor="lastName">Last Name</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input name="email" type="email" defaultValue="user@gmail.com" onChange={this.myChangeHandler} className="validate" />
                            <label htmlFor="email">Email</label>
                        </div>
                    </div>
                    <div className="row">
                        <button className="waves-effect waves-light btn" type="submit" name="action">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}