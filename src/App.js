import './App.css';
import Accordian from './components/accordian';
import ImageSlider from './components/image-slider';
import RandomColor from './components/random-color';
import StarRating from './components/star-rating';
import LoadMoreData from './components/load-more-data';
import TreeView from './components/tree-view';
import menus from './components/tree-view/data';
import QRCodeGenerator from './components/qr-code-generator';
import LightDarkMode from './components/light-dark-mode';


function App() {
  return (
    <div className="App">
      {/* Accordian  Componant*/}
      <Accordian />

      {/* Random Color Componant */}
      <RandomColor />

      {/* Star Rating Componant */}
      <StarRating noOfStars={10} />

      {/* Image Slider Componant */}
      <ImageSlider url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"} />

      {/* Load More Products Componant */}
      <LoadMoreData />

      {/* Tree View Componant */}
      <TreeView menu={menus} />

      {/* QR Code Generator */}
      <QRCodeGenerator />

      {/* Light Dark Theme Toggle */}
      <LightDarkMode />

    </div>
  );
}

export default App;
