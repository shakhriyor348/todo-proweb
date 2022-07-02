import { useEffect, useState } from 'react';
import AppEditModal from './components/AppEditModal';
import AppHeader from "./components/AppHeader";
import AppAddModal from './components/AppModal';
import Button from './components/Button';
import Container from "./components/Container";
import ListItem from './components/ListItem';
import TodoNav from "./components/TodoNav";


const date = `${new Date().getDate()}.${new Date().getMonth()}.${new Date().getFullYear()}`

const getLocalStorage = () => {
  let list = localStorage.getItem('list')
  if(list) {
    return (list = JSON.parse(localStorage.getItem('list')))
  }else {
    return []
  }
}

function App() {
  const [openSearch, setOpenSearch] = useState(false)
  const [grid, setGrid] = useState(false)
  const [showAddModal, setShowAddModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  const [lists, setList] = useState(getLocalStorage())
  const [title, setTitle] = useState('')
  const [contentInput, setContentInput] = useState('')
  const [searchValue, setSearchValue] = useState('')
  const [editTitleValue, serEditTitleValue] = useState('')
  const [editContentValue, setEditContentValue] = useState('')

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(lists))
  })

  const onClickButton = () => {
    setGrid(!grid)
  }

  const handleShowAddModal = () => {
    setShowAddModal(true)
  }

  const handleRemoveAddModal = () => {
    setShowAddModal(false)
    setShowEditModal(false)
  }

  const onChangeTitle = (e) => {
    setTitle(e.target.value)
    serEditTitleValue(e.target.value)
  }
  const onChangeEditTitle = (e) => {
    serEditTitleValue(e.target.value)
  }

  const onChangeContent = (e) => {
    setContentInput(e.target.value)
    setEditContentValue(e.target.value)
  }
  const onChangeEditContent = (e) => {
    setEditContentValue(e.target.value)
  }

  const onChangeSearchInput = (e) => {
    setSearchValue(e.target.value)
  }


  const addListItem = () => {
    const newList = {
      id: Math.random().toString(36).substr(2, 9), title: title, date: date, text: contentInput
    }

    setList([...lists, newList])
    setShowAddModal(false)
    setTitle('')
    setContentInput('')
  }

  const onEditList = (listId) => {
    const newList = lists.map(list => {
      if (list.id === listId) {
        list.title = editTitleValue
        list.date = date
        list.text = editContentValue
      }
      return list
    })
    setList(newList)
  }

  const removeListItem = (id) => {
    setList([...lists.filter(list => list.id !== id)])
  }


  const onEditListItem = () => {
    serEditTitleValue('')
    setEditContentValue('')
    setShowEditModal(true)
  }


  return (
    <div className="App">
      <AppHeader openSearch={openSearch} setOpenSearch={setOpenSearch} searchValue={searchValue} onChangeSearchInput={onChangeSearchInput} />
      <Container>
        <TodoNav openSearch={openSearch} onClickButton={onClickButton} grid={grid} />
        <div className={grid ? '' : 'grid'}>
          {
            lists.map(list => (
              <ListItem key={list.id} list={list} removeListItem={removeListItem} onEditListItem={onEditListItem} />
            ))
          }
        </div>
      </Container>
      <div className='App-addBtn'>
        <Button onClick={handleShowAddModal} showAddModal={showAddModal}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M19.06 3.59L20.41 4.94C21.2 5.72 21.2 6.99 20.41 7.77L7.18 21H3V16.82L13.4 6.41L16.23 3.59C17.01 2.81 18.28 2.81 19.06 3.59ZM5 19L6.41 19.06L16.23 9.23L14.82 7.82L5 17.64V19Z" fill="#6750A4" />
          </svg>
        </Button>
      </div>
      {showAddModal && <AppAddModal onChangeContent={onChangeContent} contentInput={contentInput} onChangeTitle={onChangeTitle} title={title} removeAddModal={handleRemoveAddModal} addListItem={addListItem} />}
      {showEditModal && <AppEditModal editTitleValue={editTitleValue} editContentValue={editContentValue} removeAddModal={handleRemoveAddModal} onChangeEditContent={onChangeEditContent} onChangeEditTitle={onChangeEditTitle} onEditList={onEditList} lists={lists} />}
    </div>
  );
}

export default App;
