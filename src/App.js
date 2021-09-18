import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Notes from './pages/Notes'
import Create from './pages/Create'
import {ThemeProvider, createTheme } from '@material-ui/core'
import { purple } from '@material-ui/core/colors'
import Layout from './components/Layout'


//Using Customm Theme
// const theme = createTheme({

//   palette:{
//     primary: {
//       main: '#fefefe'
//     },
//     secondary: purple
//   }


// })



function App() {
  return (
    
      <Router>
      <Layout>
        <Switch>
          <Route exact path="/">
            <Notes />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
        </Switch>
      </Layout>
    </Router>
    
    
  );
}

export default App;
