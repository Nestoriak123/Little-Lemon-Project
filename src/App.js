import Footer from './components/Footer';
import NavBar from './components/NavBar';
import './App.css'

function App() {
  return (
    <>
      <head>
        <title>Little Lemon</title>

        <meta name="description" content="Little Lemon Restaurant"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta name="og:title" content="Little Lemon"/>
        <meta name="og:description" content="Little Lemon is a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist."/>
        <meta name="og:image" content="https://littlelimade.com/logos/header_logo.png"/>

      </head>
      <body>
        <NavBar/>
        <Footer/>
      </body>
    </>
  );
}

export default App;
