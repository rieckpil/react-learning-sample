import React from 'react';
import Field from './Field';

class FormsComponent extends React.Component {

    state = {
        fields: {
            username: '',
            password: '',
            name: '',
            email: ''
        },
        fieldErrors: {}
    }

    mouseMove = (evt) => {
    }

    click = (evt) => {
        console.log(evt);
        const btn = evt.target;
        console.log(`The user clicked ${btn.name}: ${btn.value}`);
    }

    login = (event) => {
        event.preventDefault();
        console.log('login');
        const user = this.state.fields;
        const fieldErrors = this.validate(user);
        this.setState({fieldErrors});

        if(Object.keys(fieldErrors).length) return;

        console.log('login successful');
    }

    onInputChange = ({name, value, error}) => {
        const fields = Object.assign({}, this.state.fields);
        const fieldErrors = Object.assign({}, this.state.fieldErrors);
        fields[name] = value;
        fieldErrors[name] = error;
        
        this.setState({fields, fieldErrors});
    };

    validate = () => {
         const person = this.state.fields;
         const fieldErrors = this.state.fieldErrors;
         const errMsg = Object.keys(fieldErrors).filter((k) => fieldErrors[k]);

         if (!person.name) return true
         if (!person.email) return true;
         if(errMsg.length) return true;

         return false;
    };

    render() {
        return (
            <div onMouseMove={this.mouseMove}>
                <h3>Forms with React!</h3>
                <button name="X" value="Click me" onClick={this.click}>Click me</button>

                <form>
                    <input type="text" name="username" value={this.state.fields.username} onChange={this.onInputChange}></input>
                    <span style={{color: 'red'}}>{this.state.fieldErrors.username}</span>
                    <br/>
                    <input type="text" name="password" value={this.state.fields.password} onChange={this.onInputChange}></input>
                    <span style={{color: 'red'}}>{this.state.fieldErrors.password}</span>
                    <br/>
                    <button type="submit" onClick={this.login}>Login</button>
                </form>

                <hr/>

                <form onSubmit={this.onFormSubmit}>
                    <Field
                        placeholder="Name"
                        name="name"
                        value={this.state.fields.name}
                        onChange={this.onInputChange}
                        validate={val => (val ? false : 'Name Required')}
                    />
                    <br/>
                    <Field
                        placeholder="Email"
                        name="email"
                        value={this.state.fields.email}
                        onChange={this.onInputChange}
                        validate={val => (val.length > 5 ? false : 'Email too short')}
                    />
                    <input type="submit" disabled={this.validate()} />
                </form>

                <span>{this.state.fields.username} {this.state.fields.password}</span>
            </div>
        );
    }
}

export default FormsComponent;