/** @jsxImportSource theme-ui */
import { Box, Heading } from "rebass";
import {CSSTransition} from 'react-transition-group';

function PlantCard(props) {
    const {urlSource} = props
    return (
        <Box
            className='plant-card'
            sx={{
                variant: 'variants.card',
                backgroundImage: `url(${urlSource})`,
                transition: 'all 0.2s',
                height: '100%',
                width: '100%',
                ':hover': {
                    color: 'green',
                    cursor: 'pointer',
                    width: '105%',
                    height: '105%'
                },
            }}>
            <Heading
                sx={{
                    fontFamily: 'BigJohn !important',
                    fontWeight: 100,
                    marginTop: 'revert !important'}}
                    textAlign='center'
                    fontSize={[ 5, 6 ]}>
                {props.children}
            </Heading>
        </Box>
    )
}

export default PlantCard;