import Footer from './components/Footer';
import NavBar from './components/NavBar';
import './App.css'
import { Helmet } from 'react-helmet';

function App() {
  return (
    <div>
      <Helmet>
        <title>Little Lemon</title>

        <meta name="description" content="Little Lemon Restaurant"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>

      <div>
        <NavBar/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
