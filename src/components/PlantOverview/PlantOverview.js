/** @jsxImportSource theme-ui */
import React, { useState, useEffect } from 'react';
import PlantApi from '../../api/Plant'
import { Tiles } from '@rebass/layout';

import PlantCard from '../PlantCard/PlantCard';

function PlantOverview() {
  const [plants, setPlants] = useState([])

  useEffect(() => {
    getPlants()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [plants])

  async function getPlants() {
    let plants = await PlantApi.getPlants()
    if(plants) setPlants(plants)
  }

  function renderPlants() {
    return plants.map((plant, index) => <PlantCard key={index} urlSource={plant.thumbnail}>{plant.name}</PlantCard>)
  }

  return (
    <Tiles columns={[1, 1, 3]} 
        sx={{
            width: '100%',
            justifyItems: 'center',
            alignItems: 'center',
            marginBottom: '15px !important'}}>
        {renderPlants()}
    </Tiles>
  );
}

export default PlantOverview;
