/** @jsxImportSource theme-ui */
import {useEffect, useState} from 'react'
import { useHistory } from "react-router-dom"
import { Image, Button } from 'rebass'
import FeatherIcon from 'feather-icons-react'
import PlantApi from '../../api/Plant'
import InfoCard from '../../components/InfoCard/InfoCard'
import { PlantInfoTypes } from '../../constants'

function Plant(props) {
    const { plantId } = props
    const history = useHistory()
    const [plant, setPlant] = useState()
    const [pictureMode, setPictureMode] = useState(false)
    const [delayedAnimation, setDelayedAnimation] = useState(false)

    useEffect(() => {
        getPlant()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    async function getPlant() {
        let plant = await PlantApi.getPlantByPath(plantId)
        if(plant) setPlant(plant)
        else history.push('/')
    }

    function renderPlantLikes() {
        return plant.likes.map(like => <li sx={{p: 1}}>{like}</li>)
    }
    function renderPlantDislikes() {
        return plant.dislikes.map(dislike => <li sx={{p: 1}}>{dislike}</li>)
    }
    
    function togglePictureMode() {
        setPictureMode(!pictureMode)
        setDelayedAnimation(true)
        setTimeout(() => {
            setDelayedAnimation(false)
        }, pictureMode ? 750 : 50)
    }

  return (
    <div sx={{
        display: 'flex',
        fontWeight: 'bold',
        fontSize: 4,
        backgroundColor: 'primary',
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
          {plant &&
            <div sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    maxWidth: [ '100%', '90%', '40%' ],
                    flexGrow: 1,
                    position: 'relative',
                    overflow: 'hidden'
                }}>
                <div className='plant-background'
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        zIndex: '0',
                        borderRadius: '36px 36px 0px 0px',
                        position: 'absolute',
                        height: '100%',
                        overflow: 'clip',
                    }}>
                    <Image
                        src={plant.pictures[0].url}
                        sx={{
                            display: 'flex',
                            zIndex: '0',
                            minHeight: '100%',
                            minWidth: '100%',
                            objectFit: 'cover'
                        }}/>
                </div>
                <div sx={{height: pictureMode ? '100%' : ['50%', '50%', '100%'], transition: 'all 1s'}}></div>
                <div className='button' sx={{display: 'flex', justifyContent: 'flex-end', flexDirection: 'row', alignItems: 'flex-end', width: '100%', mr: '50px'}}>
                            <Button
                                onClick={togglePictureMode}
                                sx={{
                                    borderRadius: '100% !important',
                                    backgroundColor: 'green',
                                    boxShadow: 'large',
                                    alignSelf: 'flex-end',
                                    transform: 'translate(0, 30px)',
                                    zIndex: 500,
                                    transition: 'all 0.3s',
                                    ':hover': {
                                        backgroundColor: 'orange',
                                        cursor: 'pointer',
                                        boxShadow: 'largeColor',
                                    }}}>
                                    <FeatherIcon sx={{color: 'white', marginTop: '5px', display: pictureMode ? 'none' : 'inline'}} icon="arrow-down"/>
                                    <FeatherIcon sx={{color: 'white', marginTop: '5px', display: pictureMode ? 'inline' : 'none'}} icon="arrow-up"/>
                            </Button>
                        </div>
                <div className='plant-content'
                    sx={{
                        display: 'flex',
                        zIndex: '100',
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                        flexDirection: 'column',
                        backgroundColor: 'white',
                        borderRadius: '36px 36px 0px 0px',
                        width: '100%',
                        flexBasis: pictureMode ? '0%' : ['100%', '100%', '70%'],
                        transition: 'all 1s',
                        p: 4,
                        pb: 0
                    }}>
                    <div className='title'
                        sx={{
                            fontFamily: 'heading',
                            width: '100%',
                            mb: [2, 2, 4],
                            fontSize: [3, 3, 5]
                        }}>
                        <span sx={{}}>{plant.name}</span>
                    </div>
                    <div className='content-wrapper' 
                        sx={{display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-end',
                            alignItems: 'flex-end',
                            width: '100%',
                            flexGrow: 1,
                            overflow: 'hidden',
                            transform: pictureMode ? 'translate(0, 1000px)' : 'translate(0, 0)',
                            display: pictureMode ? (delayedAnimation ? 'block' : 'none') :  (delayedAnimation ? 'none' : 'block'),
                            transition: 'all 2s'}}>
                        <div className='description'
                            sx={{
                                fontSize: [1, 1, 3],
                                width: '100%'
                            }}>
                            <p sx={{margin: '0'}}> {plant.description} - <a target="_blank" href={plant.descriptionSource}>source</a> </p>
                        </div>
                        <p sx={{
                            width: '100%', fontFamily: 'heading', fontSize: [3, 3, 5], mb: [2, 2, 4], mt: [3, 3, 4]
                            }}>
                            Info
                        </p>
                        <p sx={{
                            width: '100%', fontFamily: 'body', fontSize: [2, 2, 4], p: 0, m: 0
                            }}>
                            Likes:
                        </p>
                        <ul sx={{
                            width: '100%', fontFamily: 'body', fontSize: [1, 1, 3], m: 0, mb: 2
                            }}>
                            {renderPlantLikes()}
                        </ul>
                        <p sx={{
                            width: '100%', fontFamily: 'body', fontSize: [2, 2, 4], p: 0, m: 0
                            }}>
                            Dislikes:
                        </p>
                        <ul sx={{
                            width: '100%', fontFamily: 'body', fontSize: [1, 1, 3], m: 0
                            }}>
                            {renderPlantDislikes()}
                        </ul>
                    </div>
                </div>
            </div>}
    </div>
  );
}
export default Plant;
