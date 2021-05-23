/** @jsxImportSource theme-ui */
import {Route, Switch, Redirect, withRouter} from 'react-router-dom';
import { ThemeProvider } from 'theme-ui'
import './styles.scss';
import theme from '../../theme'
import Home from '../Home/Home'
import Plant from '../Plant/Plant'

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
          <Switch>
            <Route exact path={'/'} component={Home}/>
            <Route exact path={'/plant'} component={Plant}/>
            <Redirect to={'/'}/>
          </Switch>
      </div>
    </ThemeProvider>
  );
}

export default withRouter(App);
