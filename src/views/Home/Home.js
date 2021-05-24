/** @jsxImportSource theme-ui */
import { Heading, Image } from 'rebass'
import './styles.scss';
import header from '../../assets/header_background.png'
import footer from '../../assets/footer.gif'
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
        <div className='footer'
            sx={{
              display: 'flex',
              flexDirection: 'column',
              height: '10%',
              alignItems: 'center'
            }}>
              <Image src={footer} sx={{borderRadius: '36px'}}></Image>
              <p sx={{fontFamily: 'BigJohn'}}>Thanks for visiting!</p>
          </div>
    </div>
  );
}

export default Home;
