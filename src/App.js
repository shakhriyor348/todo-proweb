import { useState } from 'react';
import AppHeader from "./components/AppHeader";
import Container from "./components/Container";
import TodoNav from "./components/TodoNav";


const date = `${new Date().getDate()}.${new Date().getMonth()}.${new Date().getFullYear()}`
console.log(date);

function App() {
  const [openSearch, setOpenSearch] = useState(false) 
  const [grid, setGrid] = useState(false)

  const onClickButton = () => {
    setGrid(!grid)
  }
  


  return (
    <div className="App">
      <AppHeader openSearch={openSearch} setOpenSearch={setOpenSearch}/>
      <Container>
        <TodoNav openSearch={openSearch} onClickButton={onClickButton} grid={grid}/>
      </Container>
    </div>
  );
}

export default App;
