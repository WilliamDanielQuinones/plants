/** @jsxImportSource theme-ui */
import React from 'react';
import { Tiles } from '@rebass/layout';

import PlantCard from '../PlantCard/PlantCard';

function PlantOverview() {
  return (
    <Tiles columns={[1, 1, 3]} 
        sx={{
            width: '100%',
            justifyItems: 'center',
            alignItems: 'center',
            marginBottom: '15px !important'}}>
        <PlantCard urlSource={'https://source.unsplash.com/random/1024x768?sky'}>Fiddle Leaf Fig</PlantCard>
        <PlantCard urlSource={'https://source.unsplash.com/random/1024x768?sky'}>Fiddle Leaf Fig</PlantCard>
        <PlantCard urlSource={'https://source.unsplash.com/random/1024x768?sky'}>Fiddle Leaf Fig</PlantCard>
        <PlantCard urlSource={'https://source.unsplash.com/random/1024x768?sky'}>Fiddle Leaf Fig</PlantCard>
        <PlantCard urlSource={'https://source.unsplash.com/random/1024x768?sky'}>Fiddle Leaf Fig</PlantCard>
        <PlantCard urlSource={'https://source.unsplash.com/random/1024x768?sky'}>Fiddle Leaf Fig</PlantCard>
        <PlantCard urlSource={'https://source.unsplash.com/random/1024x768?sky'}>Fiddle Leaf Fig</PlantCard>
        <PlantCard urlSource={'https://source.unsplash.com/random/1024x768?sky'}>Fiddle Leaf Fig</PlantCard>
        <PlantCard urlSource={'https://source.unsplash.com/random/1024x768?sky'}>Fiddle Leaf Fig</PlantCard>
        <PlantCard urlSource={'https://source.unsplash.com/random/1024x768?sky'}>Fiddle Leaf Fig</PlantCard>
        <PlantCard urlSource={'https://source.unsplash.com/random/1024x768?sky'}>Fiddle Leaf Fig</PlantCard>
        <PlantCard urlSource={'https://source.unsplash.com/random/1024x768?sky'}>Fiddle Leaf Fig</PlantCard>
    </Tiles>
  );
}

export default PlantOverview;
