import { useState } from 'react';
import AppHeader from "./components/AppHeader";
import AppModal from './components/AppModal';
import Button from './components/Button';
import Container from "./components/Container";
import ListItem from './components/ListItem';
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
      <AppHeader openSearch={openSearch} setOpenSearch={setOpenSearch} />
      <Container>
        <TodoNav openSearch={openSearch} onClickButton={onClickButton} grid={grid} />
        <div className={grid ? '' : 'grid'}>
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
        </div>
      </Container>
      <div className='App-addBtn'>
        <Button>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M19.06 3.59L20.41 4.94C21.2 5.72 21.2 6.99 20.41 7.77L7.18 21H3V16.82L13.4 6.41L16.23 3.59C17.01 2.81 18.28 2.81 19.06 3.59ZM5 19L6.41 19.06L16.23 9.23L14.82 7.82L5 17.64V19Z" fill="#6750A4" />
          </svg>
        </Button>
      </div>
      <AppModal>
        <div class="group">
          <input type="text" required />
          <span class="highlight"></span>
          <span class="bar"></span>
          <label>Title</label>
        </div>
      </AppModal>
    </div>
  );
}

export default App;
