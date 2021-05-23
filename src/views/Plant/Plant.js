/** @jsxImportSource theme-ui */
import { Heading } from 'rebass'
import './styles.scss';

function Home() {
  return (
    <div className='plant'>
        <div className='plant-header'>
            <Heading
                sx={{
                    position: 'absolute',
                    fontFamily: 'BigJohn !important',
                    fontWeight: 100,
                    paddingBottom: '10%'
                }}
                fontSize={[ 5, 6 ]}
                textAlign='center'>
                Fiddle Leaf Fig
            </Heading>
            <img src={'https://i.imgur.com/S6WJVBJ.jpg'} alt="logo" sx={{width: '100vw'}}/>
        </div>
        <div className='plant-content'>
            Dis my plant
        </div>
    </div>
  );
}

export default Home;
