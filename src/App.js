import logo from './logo.svg';
import './App.css';
import { AppBarComponent, ToolBarComponent, ListDataGrid, Footer } from './components'
function App() {
  return (
    <div className="App">
      {/* The AppBar component, implemented using the Material-UI (MUI) AppBar component,

        is utilized in the project. This component is located in the 'components' directory

        and provides a consistent and visually appealing navigation element at the top of the 

        application interface */}
      <AppBarComponent />

      {/* Toolbar component contains the searchbar,  filters buttons etc.  */}
      <ToolBarComponent />

      {/* The ListDataGrid component is a custom data grid that retrieves dummy data from the dummyData.js

       file and presents it in the form of a grid. This component is designed to provide a visually organized

        display of data, allowing users to easily navigate, search, and filter through the information. */}
      <ListDataGrid />
      
      {/* The footer component is a custom footer for the project, It may contain quick links etc. */}
      <Footer />
    </div>
  );
}

export default App;
