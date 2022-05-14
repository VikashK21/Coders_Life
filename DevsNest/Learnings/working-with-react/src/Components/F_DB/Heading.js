import React from 'react'


class Heading extends React.Component {
    constructor(props) {
        super(props)
        this.props = props;

    }

    render() {
        return (
            <>
                <nav>
                    Home
                    Login
                    SignUp
                </nav>
            </>
        )
    }
}


export default Heading;