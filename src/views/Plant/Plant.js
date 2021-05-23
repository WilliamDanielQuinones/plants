/** @jsxImportSource theme-ui */
import {useEffect, useState} from 'react'
import { useHistory } from "react-router-dom"
import { Image } from 'rebass'
import PlantApi from '../../api/Plant'

function Plant(props) {
    const { plantId } = props
    const history = useHistory()
    const [plant, setPlant] = useState()

    async function getPlant() {
        let plant = await PlantApi.getPlantByPath(plantId)
        if(plant) setPlant(plant)
        else history.push('/')
    }

    useEffect(() => {
        getPlant()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

  return (
    <div sx={{
        display: 'flex',
        fontWeight: 'bold',
        fontSize: 4,
        backgroundColor: 'primary',
        width: '100%',
        height: '100%',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexDirection: 'column'
      }}>
          {plant &&
            <div>
                <div className='plant-background'
                    sx={{
                        zIndex: '0',
                        position: 'absolute'
                    }}>
                    <Image
                        src={plant.pictures[0].url}
                        sx={{
                            width: [ '100%', '50%' ],
                            borderRadius: 8,
                            position: 'fixed',
                            zIndex: '0',
                        }}/>
                </div>
                <div className='plant-content'
                    sx={{
                        zIndex: '100',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column'
                    }}>
                    <p>{plant.name}</p>
                </div>
            </div>}
        
    </div>
  );
}

export default Plant;
