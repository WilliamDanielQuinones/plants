/** @jsxImportSource theme-ui */
import {useEffect, useState} from 'react'
import { useHistory } from "react-router-dom"
import { Image, Button } from 'rebass'
import FeatherIcon from 'feather-icons-react'
import PlantApi from '../../api/Plant'

function Plant(props) {
    const { plantId } = props
    const history = useHistory()
    const [plant, setPlant] = useState()
    const [pictureMode, setPictureMode] = useState(false)
    const [currentPicture, setCurrentPicture] = useState()
    const [currentPictureId, setCurrentPictureId] = useState(0)
    const [amountOfPictures, setAmountOfPictures] = useState()

    useEffect(() => {
        getPlant()
        getCurrentPicture()
        getAmountOfPictures()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [plant])

    async function getPlant() {
        let plant = await PlantApi.getPlantByPath(plantId)
        if(plant) setPlant(plant)
        else history.push('/')
    }

    function getCurrentPicture() {
        if(plant) setCurrentPicture(plant.pictures[currentPictureId].url)
    }

    function getCurrentPictureDate() {
        if(plant) return plant.pictures[currentPictureId].date.toLocaleDateString("en-US")
    }

    function getCurrentPictureComment() {
        if(plant) return plant.pictures[currentPictureId].comment
    }

    function getAmountOfPictures() {
        if(plant) setAmountOfPictures(plant.pictures.length)
    }

    function setNewPicture(id) {
        if(plant) {
            setCurrentPicture(plant.pictures[id].url)
            setCurrentPictureId(id)
        }
    }

    function nextPicture() {
        if(plant) {
            let newId = currentPictureId + 1
            if(newId < amountOfPictures) setNewPicture(newId)
        }
    }

    function previousPicture() {
        if(plant) {
            let newId = currentPictureId - 1
            if(newId > -1) setNewPicture(newId)
        }
    }

    function renderPlantLikes() {
        return plant.likes.map((like, index) => <li key={index} sx={{p: 1}}>{like}</li>)
    }
    function renderPlantDislikes() {
        return plant.dislikes.map((dislike, index) => <li key={index} sx={{p: 1}}>{dislike}</li>)
    }
    
    function togglePictureMode() {
        setPictureMode(!pictureMode)
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
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                        zIndex: '0',
                        position: 'absolute',
                        height: '100%',
                        overflow: 'clip',
                    }}>
                    {currentPicture &&
                        <Image
                        src={currentPicture}
                        sx={{
                            display: 'flex',
                            zIndex: '0',
                        }}/>
                    }
                    {currentPicture &&
                        <div
                        src={currentPicture}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            zIndex: '10',
                            borderRadius: '24px 24px 0px 0px',
                            backgroundColor: 'yellow',
                            height: '100%',
                            width: '100%',
                            transform: 'translate(0, -10px)',
                            p: 4,
                            pb: 0,
                            color: 'black'
                        }}>
                            <div sx={{fontSize: [4, 4, 5], mb: 3}}>
                                {`${getCurrentPictureDate()}`}
                            </div>
                            <div sx={{fontSize: [2, 2, 3]}}>
                                {`${getCurrentPictureComment()}`}
                            </div>
                        </div>
                    }
                </div>
                <div sx={{height: pictureMode ? '100%' : '0%', flexGrow: 1, postion: 'absolute'}}></div>
                <div className='picture-mode-buttons' 
                    sx={{
                        display: pictureMode ? 'flex' : 'none',
                        postion: 'absolute',
                        justifyContent: 'space-between', flexDirection: 'row',
                        flexGrow: 1,
                        pl: 2,
                        pr: 2,
                        width: '100%'}}>
                    <div sx={{height: '55px', width: '55px', display: 'flex', visibility: currentPictureId === 0 ? 'hidden' : ''}}>
                        <Button
                            onClick={previousPicture}
                            sx={{
                                borderRadius: '100% !important',
                                backgroundColor: 'transparent',
                                alignSelf: 'flex-start',
                                justifySelf: 'flex-start',
                                zIndex: 50,
                                width: '100%',
                                height: '100%',
                                ':hover': {
                                    backgroundColor: 'orange',
                                    opacity: '0.5',
                                    cursor: 'pointer',
                                }}}>
                                <FeatherIcon sx={{color: 'white', marginTop: '5px'}} icon="arrow-left"/>
                        </Button>
                    </div>
                    
                    <div sx={{height: '55px', width: '55px', display: 'flex', visibility: currentPictureId === amountOfPictures - 1 ? 'hidden' : ''}}>
                        <Button
                            onClick={nextPicture}
                            sx={{
                                borderRadius: '100% !important',
                                backgroundColor: 'transparent',
                                alignSelf: 'flex-start',
                                justifySelf: 'flex-start',
                                zIndex: 50,
                                width: '100%',
                                height: '100%',
                                ':hover': {
                                    backgroundColor: 'orange',
                                    opacity: '0.5',
                                    cursor: 'pointer',
                                }}}>
                                <FeatherIcon sx={{color: 'white', marginTop: '5px'}} icon="arrow-right"/>
                        </Button>
                    </div>
                    
                </div>
                <div sx={{height: pictureMode ? '100%' : ['50%', '50%', '100%']}}></div>
                <div className='button' sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    flexDirection: 'row',
                    alignItems: 'flex-end',
                    width: '100%',
                    mr: '50px',
                    transform: 'translate(0, 30px)',
                    zIndex: 500}}>
                    <Button
                        onClick={togglePictureMode}
                        sx={{
                            borderRadius: '100% !important',
                            backgroundColor: 'green',
                            boxShadow: 'large',
                            alignSelf: 'flex-end',
                            ':hover': {
                                backgroundColor: 'orange',
                                opacity: '0.5',
                                cursor: 'pointer',
                                boxShadow: 'largeColor',
                            }}}>
                            <FeatherIcon sx={{color: 'white',marginTop: '5px', display: pictureMode ? 'none' : 'inline',}} icon="arrow-down"/>
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
                        height: '100%',
                        flexBasis: pictureMode ? '0%' : '100%',
                        p: 4,
                        pb: 0
                    }}>
                    <div className='title'
                        sx={{
                            fontFamily: 'heading',
                            width: '100%',
                            mb: [4, 4, 4],
                            fontSize: [2, 2, 5]
                        }}>
                        <span sx={{}}>{plant.name}</span>
                    </div>
                    <div className='content-wrapper' 
                        sx={{
                            flexDirection: 'column',
                            justifyContent: 'flex-end',
                            alignItems: 'flex-end',
                            width: '100%',
                            height: '100%',
                            flexGrow: 1,
                            overflow: 'hidden',
                            mb: [4, 4, 4],
                            transform: pictureMode ? 'translate(0, 1000px)' : 'translate(0, 0)',
                            display: pictureMode ? 'none' : 'block'}}>
                        <div className='description'
                            sx={{
                                fontSize: [1, 1, 1],
                                width: '100%'
                            }}>
                            <p sx={{margin: '0'}}> {plant.description} - <a target="_blank" rel="noreferrer" href={plant.descriptionSource}>source</a> </p>
                        </div>
                        <p sx={{
                            width: '100%', fontFamily: 'heading', fontSize: [2, 2, 3], mb: [1, 1, 2], mt: [3, 3, 4]
                            }}>
                            Info
                        </p>
                        <p sx={{
                            width: '100%', fontFamily: 'body', fontSize: [2, 2, 3], p: 0, m: 0
                            }}>
                            Likes:
                        </p>
                        <ul sx={{
                            width: '100%', fontFamily: 'body', fontSize: [1, 1, 2], m: 0, mb: 2
                            }}>
                            {renderPlantLikes()}
                        </ul>
                        <p sx={{
                            width: '100%', fontFamily: 'body', fontSize: [2, 2, 3], p: 0, m: 0
                            }}>
                            Dislikes:
                        </p>
                        <ul sx={{
                            width: '100%', fontFamily: 'body', fontSize: [1, 1, 2], m: 0
                            }}>
                            {renderPlantDislikes()}
                        </ul>
                        <a  sx={{
                                width: '100%', fontFamily: 'body', fontSize: [2, 2, 3], p: 0, m: 0, pt:2
                            }}
                            target="_blank" rel="noreferrer" href={plant.databaseUrl}>
                            Database
                        </a>
                    </div>
                </div>
            </div>}
    </div>
  );
}
export default Plant;
