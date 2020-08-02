import React from 'react';
import {Grid, Form, Segment, Button, Header, Message, Icon} from 'semantic-ui-react'
import firebase from '../../firebase';
import {Link} from 'react-router-dom'

class Register extends React.Component {

    state = {
        username: "",
        email: "",
        password: "",
        passwordConfirmation: ""
    };

    handleChange = event => {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit = event => {
        event.preventDefault();
        firebase
            .auth()
            .createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(createdUser => {
                console.log(createdUser);
            })
            .catch(err => {
                console.error(err);
            });
        };

    render () {
        return (
             <div>
             <Grid textAlign="center" verticalAlign="middle" className="app">
                 <Grid.Column style={{ maxWidth: 450 }}>
                     <Header as="h2" icon color="orange" textAlign="center">
                         <Icon name="puzzle piece" color="orange" />
                         Register for DevChat
                     </Header>
                     <Form size="large" onSubmit={this.handleSubmit}>
                         <Segment stacked>
                             <Form.Input fluid name="username" icon="user" iconPosition="left"
                             placeholder="Username" onChange={this.handleChange} type="text" value={this.username}/>

                             <Form.Input fluid name="email" icon="mail" iconPosition="left"
                             placeholder="Email Address" onChange={this.handleChange} type="email" value={this.email}/>

                             <Form.Input fluid name="password" icon="lock" iconPosition="left"
                             placeholder="Password" onChange={this.handleChange} type="password" value={this.password}/>

                             <Form.Input fluid name="passwordConfirmation" icon="repeat" iconPosition="left"
                             placeholder="Password Confirmation" onChange={this.handleChange} type="password" value={this.passwordConfirmation}/>

                             <Button color="orange" fluid size="large">Submit</Button>
                         </Segment>
                     </Form>
                     <Message>Already a user?<Link to="/login">Login</Link></Message>
                </Grid.Column>
             </Grid>
             </div>

        )
    }
}

export default Register;