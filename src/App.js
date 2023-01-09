import ShowModalButton from './components/common/showModalButton'
import Modal from './components/ui/modal/modal'
import {useState} from 'react'

function App() {
  const [active, setActive] = useState(false)
  return (
    <div className="App">
      <div className='container'>
        <ShowModalButton setActive={setActive}/>
        <Modal active={active} setActive={setActive}>

        </Modal>
      </div>
    </div>
  );
}

export default App;
