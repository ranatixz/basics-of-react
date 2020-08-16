import React, { Component } from 'react'
import axios from 'axios'
class PostForm extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             userId: '',
             title: '',
             body: ''
        }
    }
    
    onChangeHandler = e => this.setState({[e.target.name]: e.target.value})
    onSubmitHandler = e =>{
        e.preventDefault()
        console.log(this.state)

        axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
            .then(response =>{
                console.log(response)
            })
            .catch(error =>{
                console.log(error)
            })
    }

    render() {
        const {userId, title, body} = this.state
        return (
            <div>
                <form onSubmit={this.onSubmitHandler}>
                    <div>
                        <input 
                            type="text" 
                            onChange={this.onChangeHandler} 
                            name="userId"
                            value={userId}
                        />
                    </div>
                    <div>
                        <input 
                            type="text" 
                            onChange={this.onChangeHandler} 
                            name="title"
                            value={title}
                        />
                    </div>
                    <div>
                        <input 
                            type="text" 
                            onChange={this.onChangeHandler} 
                            name="body"
                            value={body}
                        />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default PostForm
