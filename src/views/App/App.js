/** @jsxImportSource theme-ui */
import {Route, Switch, Redirect, withRouter} from 'react-router-dom'
import { ThemeProvider } from 'theme-ui'
import theme from '../../theme'
import Home from '../Home/Home'
import Plant from '../Plant/Plant'
import ColorSwitcher from '../../components/ColorSwitcher/ColorSwitcher'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="app" 
        sx={{
          display: 'table',
          backgroundColor: 'primary',
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <ColorSwitcher />
          <Switch>
            <Route exact path={'/'} component={Home}/>
            <Route exact path={'/plant/:plantId'} render={({ match }) => <Plant plantId={match.params.plantId}></Plant>}/>
            <Redirect to={'/'}/>
          </Switch>
      </div>
    </ThemeProvider>
  );
}

export default withRouter(App);
