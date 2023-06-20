import logo from './logo.svg';
import './App.css';
import {AppBarComponent,ToolBarComponent,ListDataGrid,Footer} from './components'
function App() {
  return (
    <div className="App">
     <AppBarComponent />
     <ToolBarComponent />
     <ListDataGrid />
     <Footer />
    </div>
  );
}

export default App;
