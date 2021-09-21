import './App.css'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import WeatherCity from './WeatherApp/WeatherCity';
import Layout from './WeatherApp/components/Layout'
import Error from './WeatherApp/Error'
import NavigationBar from './WeatherApp/components/NavigationBar';
import ScrollIcon from './WeatherApp/components/ScrollIcon';
// import Jumbtron from './WeatherApp/components/Jumbtron';



function App() {
  return (
    <>
      <Layout>
        <NavigationBar />
        {/* <Jumbtron /> */}
        <Router>
          <Switch>
            <Route exact path="/" component={WeatherCity} />
            <Route component={Error} />
          </Switch>
        </Router>
        <ScrollIcon />
      </Layout>
    </>
  );
}

export default App;
