/** @jsxImportSource theme-ui */
import { useHistory } from "react-router-dom";
import { Box, Heading } from "rebass";

function PlantCard(props) {
    const history = useHistory()
    const {urlSource} = props

    const onButtonClick = (e) => {
        history.push('/plant')
    };
    
    return (
        <Box
            onClick={onButtonClick}
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