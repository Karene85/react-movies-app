import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './Header.css';
import BookShow from '../../screens/bookshow/BookShow';
import Button from '@material-ui/core/Button';
import logo from '../../assets/logo.svg';
import Modal from 'react-modal';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import PropTypes from 'prop-types';
import FormHelperText from '@material-ui/core/FormHelperText';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
}

const TabContainer = function(props) {
    return(
        <Typography component='div' style={{padding: 0, textAlign: 'center'}}>
            {props.children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired
}

class Header extends Component {
    constructor() {
        super();
        this.state = {
            modalIsOpen: false,
            value: 0,
            username: "",
            password: "",
            firstName: "",
            lastName: "",
            email: "",
            password2: "",
            phone: "",
            usernameRequired: "dispNone",
            passwordRequired: "dispNone",
            firstNameRequired: "dispNone",
            lastNameRequired: "dispNone",
            emailRequired: "dispNone",
            password2Required: "dispNone",
            phoneRequired: "dispNone"
        };
    }

    openModalHandler = () => {
        this.setState({modalIsOpen: true}); 
    }

    closeModalHandler = () => {
        this.setState({modalIsOpen: false});
        this.setState({usernameRequired: "dispNone"});
        this.setState({passwordRequired: "dispNone"});
        this.setState({firstNameRequired: "dispNone"});
        this.setState({lastNameRequired: "dispNone"});
        this.setState({emailRequired: "dispNone"});
        this.setState({password2Required: "dispNone"});
        this.setState({phoneRequired: "dispNone"});
        this.setState({value: 0});
    }

    tabChangeHandler = (event, value) => {
        this.setState({value});
    }

    loginClickHandler = () => {
        this.state.username === "" ? this.setState({usernameRequired: "dispBlock"}) : 
        this.setState({usernameRequired: "dispNone"});

        this.state.password === "" ? this.setState({passwordRequired: "dispBlock"}) :
        this.setState({passwordRequired: "dispNone"});
    }

    registerClickHandler = () => {
        this.state.firstName === "" ? this.setState({firstNameRequired: "dispBlock"}) :
        this.setState({firstNameRequired: "dispNone"});

        this.state.lastName === "" ? this.setState({lastNameRequired: "dispBlock"}) :
        this.setState({lastNameRequired: "dispNone"});

        this.state.email === "" ? this.setState({emailRequired: "dispBlock"}) :
        this.setState({emailRequired: "dispNone"});

        this.state.password2 === "" ? this.setState({password2Required: "dispBlock"}) :
        this.setState({password2Required: "dispNone"});

        this.state.phone === "" ? this.setState({phoneRequired: "dispBlock"}) :
        this.setState({phoneRequired: "dispNone"});
    }

    inputUsernameChangeHandler = (e) => {
        this.setState({username: e.target.value});
    }

    inputPasswordChangeHandler = (e) => {
        this.setState({password: e.target.value});
    }

    inputFirstNameChangeHandler = (e) => {
        this.setState({firstName: e.target.value});
    }

    inputLastNameChangeHandler = (e) => {
        this.setState({lastName: e.target.value});
    }

    inputEmailChangeHandler = (e) => {
        this.setState({email: e.target.value});
    }

    inputPassword2ChangeHandler = (e) => {
        this.setState({password2: e.target.value});
    }

    inputPhoneChangeHandler = (e) => {
        this.setState({phone: e.target.value});
    }

    bookShowHandler = () => {
        ReactDOM.render(
            <BookShow />,  document.getElementById('root')
          );
    }

    render() {
        return(
            <div>
                <header className="app-header">
                    <img src={logo} className='app-logo' alt='logo'/>
                    <div className="login-button">
                        <Button variant="contained" color="default" onClick={this.openModalHandler}>
                            Login
                        </Button>
                    </div>
                    {this.props.showBookShowButton === 'true' ?
                    <div className='bookshow-button'>
                        <Button variant='contained' color='primary' onClick={this.bookShowHandler}>
                            BOOK SHOW
                        </Button>
                    </div> : ""}
                </header>
                <Modal ariaHideApp={false} isOpen={this.state.modalIsOpen} contentLabel="Login" 
                onRequestClose={this.closeModalHandler} style={customStyles}>
                    <Tabs className='tabs' value={this.state.value} onChange={this.tabChangeHandler}>
                        <Tab label="Login" />
                        <Tab label="Register" />
                    </Tabs>
                    {this.state.value === 0 &&
                    <TabContainer>
                        <FormControl required>
                            <InputLabel htmlFor='username'>Username</InputLabel>
                            <Input id='username' type='text' username={this.state.username} onChange=
                            {this.inputUsernameChangeHandler}></Input>
                            <FormHelperText className={this.state.usernameRequired}><span className="red">
                            required</span></FormHelperText>
                        </FormControl><br/><br/>
                        <FormControl required>
                            <InputLabel htmlFor='password'>Password</InputLabel>
                            <Input id='password' type='password' password={this.state.password} onChange=
                            {this.inputPasswordChangeHandler}></Input>
                            <FormHelperText className={this.state.passwordRequired}><span className="red">
                            required</span></FormHelperText>
                        </FormControl><br/><br/>
                        <Button variant='contained' color='primary' onClick={this.loginClickHandler}>
                        LOGIN</Button>
                    </TabContainer>}

                    {this.state.value === 1 &&
                    <TabContainer>
                        <FormControl required>
                            <InputLabel htmlFor='first-name'>First Name</InputLabel>
                            <Input id='first-name' type='text' onChange={this.inputFirstNameChangeHandler}></Input>
                            <FormHelperText className={this.state.firstNameRequired}>
                                <span className='red'>required</span></FormHelperText>
                        </FormControl> <br/><br/>
                        <FormControl required>
                            <InputLabel htmlFor='last-name'>Last Name</InputLabel>
                            <Input id='last-name' type='text' onChange={this.inputLastNameChangeHandler}></Input>
                            <FormHelperText className={this.state.lastNameRequired}>
                                <span className='red'>required</span></FormHelperText>
                        </FormControl> <br/><br/>  
                        <FormControl required>
                            <InputLabel htmlFor='email'>Email</InputLabel>
                            <Input id='email' type='email' onChange={this.inputEmailChangeHandler}></Input>
                            <FormHelperText className={this.state.emailRequired}>
                                <span className='red'>required</span></FormHelperText>
                        </FormControl> <br/><br/>
                        <FormControl required>
                            <InputLabel htmlFor='password'>Password</InputLabel>
                            <Input id='password' type='password' onChange={this.inputPassword2ChangeHandler}></Input>
                            <FormHelperText className={this.state.password2Required}>
                                <span className='red'>required</span></FormHelperText>
                        </FormControl> <br/><br/>
                        <FormControl required>
                            <InputLabel htmlFor='phone'>Contact No.</InputLabel>
                            <Input id='phone' type='text' onChange={this.inputPhoneChangeHandler}></Input>
                            <FormHelperText className={this.state.phoneRequired}>
                                <span className='red'>required</span></FormHelperText>
                        </FormControl> <br/><br/>
                        <Button variant='contained' color='primary' onClick={this.registerClickHandler}>REGISTER</Button>
                    </TabContainer>
                    }
                </Modal>
            </div>
        )
    }
}

export default Header;