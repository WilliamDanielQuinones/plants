/** @jsxImportSource theme-ui */
import { Heading } from 'rebass'
import './styles.scss';
import header from '../../assets/header_background.png'
import PlantOverview from '../../components/PlantOverview/PlantOverview'

function Home() {
  return (
    <div className='home'>
        <div className='home-header'>
            <Heading
                sx={{
                    position: 'absolute',
                    fontFamily: 'BigJohn !important',
                    fontWeight: 100,
                    paddingBottom: '10%'
                }}
                fontSize={[ 5, 6 ]}
                textAlign='center'>
                Hi, these are my plants!
            </Heading>
            <img src={header} alt="logo" sx={{width: '100vw'}}/>
        </div>
        <div className='home-content'>
            <PlantOverview></PlantOverview>
        </div>
    </div>
  );
}

export default Home;
