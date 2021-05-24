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
            <img src={header} alt="logo" sx={{width: '100%', borderRadius: ['0 0 32px 32px', '0 0 32px 32px', '0 0 128px 128px']}}/>
        </div>
        <div className='home-content' sx={{transform: ['translate(0, -50px)', 'translate(0, -50px)', 'translate(0, -100px)']}}>
            <PlantOverview></PlantOverview>
        </div>
    </div>
  );
}

export default Home;
