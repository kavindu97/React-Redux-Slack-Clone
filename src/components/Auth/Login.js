import React from 'react';
import {Grid, Form, Segment, Button, Header, Message, Icon} from 'semantic-ui-react'
import firebase from '../../firebase';
import {Link} from 'react-router-dom'

class Login extends React.Component {

    state = {
        email: "",
        password: "",
        errors: [],
        loading: false,
    };

    isForValid = ({email, password}) => email && password;

    handleInputError = (errors, inputName) => {
        return errors.some(error => error.message.toLowerCase().includes(inputName)) ? 'error' : ''
    }

    displayErrors = errors => errors.map((error, i) => <p key={i}>{error.message}</p>);


    handleChange = event => {
        this.setState({[event.target.name]: event.target.value});
    };

    handleSubmit = event => {
        event.preventDefault();
         if(this.isForValid(this.state)) {
             this.setState({ errors: [], loading: true});
             firebase
                .auth()
                .signInWithEmailAndPassword(this.state.email, this.state.password)
                .then(signedInUser => {
                    console.log(signedInUser);
                    this.setState({
                        loading: false
                    })
                    
                })
                .catch(err => {
                    console.error(err);
                    this.setState({
                        errors: this.state.errors.concat(err),
                        loading: false
                    })
                })
            }  
    };

    render () {
        const {
            email,
            password,
            errors,
            loading
          } = this.state
        return (
             <div>
             <Grid textAlign="center" verticalAlign="middle" className="app">
                 <Grid.Column style={{ maxWidth: 450 }}>
                     <Header as="h1" icon color="violet" textAlign="center">
                         <Icon name="code branch" color="violet" />
                         Login to DevChat
                     </Header>
                     <Form size="large" onSubmit={this.handleSubmit}>
                         <Segment stacked>
                             
                             <Form.Input fluid name="email" icon="mail" iconPosition="left"
                             placeholder="Email Address" onChange={this.handleChange} type="email" value={email}
                             className={this.handleInputError(errors, 'email')}/>

                             <Form.Input fluid name="password" icon="lock" iconPosition="left"
                             placeholder="Password" onChange={this.handleChange} type="password" value={password}
                             className={this.handleInputError(errors, 'password')}/>

                             <Button disabled={loading} className={this.loading ? 'loading' : ''} color="violet" fluid size="large">Submit</Button>
                         </Segment>
                     </Form>
                     {this.state.errors.length > 0 && (
                        <Message error>
                            <h3>Error</h3>
                            {this.displayErrors(this.state.errors)}
                        </Message>
                     )}
                     <Message>Don't have an account?<Link to="/register">Login</Link></Message>
                </Grid.Column>
             </Grid>
             </div>

        )
    }
}

export default Login;