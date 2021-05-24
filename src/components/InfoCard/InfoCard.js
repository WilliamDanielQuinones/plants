/** @jsxImportSource theme-ui */
import { useHistory } from "react-router-dom"
import FeatherIcon from 'feather-icons-react'
import { Box } from "rebass"
import { PlantInfoTypes } from '../../constants'

function InfoCard(props) {
    const history = useHistory()
    const {type, content} = props

    function getTypeIcon() {
        let Icon
        switch(type) {
            case PlantInfoTypes.Light:
                return (<FeatherIcon sx={{height: '100%', width: '50%'}} icon="sun"/>)
            case PlantInfoTypes.Water:
                return (<FeatherIcon sx={{height: '100%', width: '50%'}} icon="droplet"/>)
            case PlantInfoTypes.Text:
                return null
            default:
                return null
        }
    }
    
    return (
        <div sx={{flexShrink: 0, flex: '1 1 0', minWidth: 0, height: '100%', width: '100%'}}>
            {type &&
                <Box
                className='info-card'
                sx={{
                    variant: 'variants.smallCard',
                }}>
                    {getTypeIcon()}
                    <p sx={{m: 0, fontFamily: 'body', fontSize: [1,1,1], justifySelf: 'flex-end'}}>{content}</p>
                </Box>
            }
        </div>
    )
}

export default InfoCard;