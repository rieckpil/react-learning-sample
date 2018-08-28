import React from 'react';
import PropTypes from 'prop-types';

class Header extends React.Component {

    static propTypes = {
        headerText: PropTypes.string.isRequired,
        amount: PropTypes.number
    }

    static defaultProps = {
        amount: 2
    }

    render() {
        return (
            <div>
                 {
                    Array.from({ length:  this.props.amount }, (_, k) => (
                        <h3 key={k}>{this.props.headerText}</h3>
                    ))
                }
            </div>
        )
    }
}

export default Header;