import PropTypes from 'prop-types' ;
import React from 'react' ;
import './Button.css' ;

export const handleClick = ( { onClick } ) => ( event ) => {
    onClick( event ) ;
} ;

const Button = ( { children, onClick } ) => (
    <button onClick={ handleClick( { onClick } ) }>{ children }</button>
) ;

Button.propTypes = {
    children: PropTypes.string.isRequired,
    onClick: PropTypes.func,
} ;

Button.defaultProps = {
    onClick: () => { },
} ;

export default Button ;
