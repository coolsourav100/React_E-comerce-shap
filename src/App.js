import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header';
import ListProduct from './Component/Products/ListProduct';
import Banner from './Component/UI/Banner';

function App() {
  return (
    <div>
      <Header/>
      <Banner/>
      <h2 className='display-3 text-center'>Music</h2>
      <ListProduct/>
      <Footer/>
    </div>
  );
}

export default App;
