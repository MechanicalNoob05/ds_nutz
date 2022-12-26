
import './App.css';
import Menu from './pages/components/menu/menu';
import Page_display from './pages/components/page_display/page_display';

function App() {
  return (
    <div className="App">
      <div className="left">
        <Menu></Menu>
      </div>
      <div className="right">
        <Page_display></Page_display>
      </div>
    </div>
  );
}

export default App;
