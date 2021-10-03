import React from 'react' ;
import { render, fireEvent, screen } from '@testing-library/react' ;

import Button, { handleClick } from './Button' ;

describe( '[ atoms / Button ]', () =>
{
    describe( '#Button', () =>
    {
        it( 'when `Button` is clicked', () =>
        {
            // Arrange
            const onClickMock = jest.fn() ;
            const props = {
                onClick: onClickMock,
            } ;

            // Act
            render( <Button { ...props }>Button</Button> ) ;
            fireEvent.click( screen.getByText( 'Button' ) ) ;

            // Assert
            expect( onClickMock ).toHaveBeenCalled() ;
        } ) ;
    } ) ;
} ) ;
