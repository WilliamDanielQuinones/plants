/** @jsxImportSource theme-ui */
import { ThemeProvider } from 'theme-ui'
import './styles.scss';
import theme from '../../theme'
import Home from '../Home/Home'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="app" 
        sx={{
          fontWeight: 'bold',
          fontSize: 4,
          backgroundColor: 'primary',
          width: '100%',
        }}>
          <Home></Home>
      </div>
    </ThemeProvider>
  );
}

export default App;
