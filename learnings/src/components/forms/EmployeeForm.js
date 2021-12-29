import React, { Component } from 'react';

class EmployeeForm extends Component {
      
    constructor(props){
        super(props)
        this.state = {
            username: '',
            comments: '',
        }
    }

    handleUserNameChange = (event) => {
        this.setState({
            username: event.target.value
        });
    }

    handleCommentChange = (event) =>{
        this.setState({
            comments: event.target.value
        });
    }

    handleSubmitForm = (event) =>{
        console.log(this.state.username+""+this.state.comments);
        event.preventDefault();
    }

    render() {
        const {usernme, comments} = this.state;
        return (
            <form onSubmit={this.handleSubmitForm}>
                Form Component
                <div>
                <label> Input</label>
                <input type="text" value={usernme} onChange={this.handleUserNameChange} />
                </div>
                <div>
                    <label>Comments</label>
                    <textarea  onChange={this.handleCommentChange} defaultValue={comments} ></textarea>
                </div>
             

                <input type="submit" />
            </form>
        );
    }
}

export default EmployeeForm;