import React from 'react'
import '../../App.css'


class Structure extends React.Component {
    constructor(props, name, value) {
        super(props)
        this.props = props;
        this.state = {
            name: "",
            email: "",
            password: ""
        }
        this.name = name;
        this.value = value;
    }
    userData = (event) => {
        this.name = event.target.name;
        this.value = event.target.value;
        this.setState({ ...this.state, [this.name]: this.value })

    }

    handleData = async (e) => {
        e.preventDefault();
        console.log(e.target.value)
        const res = this.props.gettingUserD(this.state)

    // pushing into the firebase.
        // const res = await fetch("https://fir-62674-default-rtdb.europe-west1.firebasedatabase.app/LoginSignup.json", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "Application/json",

        //     },
        //     body: JSON.stringify(this.state)
        // })
        if (res) {
            this.setState({
                name: "",
                email: "",
                password: ""
            })
            alert('You are successfully Signed Up.')
        }

    }

    render() {
        return (
            <>
                <form className='flex' onSubmit={this.handleData} method="POST">
                    <div className='flex-child'>
                        <label >Your Name <br />
                            <input
                                className='btn'
                                type="text"
                                name="name"
                                value={this.state.name}
                                onChange={this.userData}
                                placeholder='Enter your name'
                                required />

                        </label>
                        <label>Your Email <br />
                            <input
                                className='btn'
                                type="email"
                                name="email"
                                value={this.state.email}
                                onChange={this.userData}
                                placeholder='Enter your email'
                                required />

                        </label>
                        <label>Your Password
                            <br />
                            <input
                                className='btn'
                                type="password"
                                name="password"
                                value={this.state.password}
                                onChange={this.userData}
                                placeholder='Create a strong Password'
                                required />

                        </label>
                        <button type="submit" className='btn btn-dsn'>Sign Up</button>
                    </div>
                </form>
            </>
        )
    }
}


export default Structure;