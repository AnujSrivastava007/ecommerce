import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Container } from "react-bootstrap";
import HomeScreen from "./components/HomeScreen";
import {Route, Router, Switch} from 'react-router-dom';
import ProductDetail from "./components/ProductDetail";

function App() {
  return (
    <>
      <Header />
      <main className="py-4">
        <Container>
          <HomeScreen/>
          {/* <ProductDetail/> */}
          {/* <Switch>
          <Route path='/' component={HomeScreen} exact/>
          <Route path='/product/:id' component={ProductDetail} exact/>
          </Switch> */}
          
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;

