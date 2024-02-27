import './App.css';
import gptLogo from './assets/chatgpt.svg';
import addBtn from './assets/add-30.png';
import msgIcon from './assets/message.svg';
import home from './assets/home.svg';
import saved from './assets/bookmark.svg';
import rocket from './assets/rocket.svg';
import sendBtn from './assets/send.svg';
import userIcon from './assets/user-icon.png';
import gptImgLogo from './assets/chatgptLogo.svg'

function App() {
  return (
    <div className="App">
      <div className='sideBar'>
        <div className='upperSide'>
          <div className='upperSideTop'> <img src={gptLogo} alt='Logo' className='logo' /> <span className='brand'>ChatGPT</span></div>
          <button className='midBtn'> <img src={addBtn} alt='New Chat' className='addBtn' />New Chat</button>
          <div className='upperSideBottom'>
            <button className='query'> <img src={msgIcon} alt='Query' /> What is Programming?</button>
            <button className='query'> <img src={msgIcon} alt='Query' /> How to use an API?</button>
          </div>
        </div>

        <div className='lowerSide'>
          <div className='listItems'> <img src={home} alt='Home' className='listItemsImg' />Home</div>
          <div className='listItems'> <img src={saved} alt='Saved' className='listItemsImg' />Saved</div>
          <div className='listItems'> <img src={rocket} alt='Upgrade' className='listItemsImg' />Upgrade to Pro</div>

        </div>
      </div>

      <div className='main'>
        <div className='chats'>

          <div className='chat'>
            <img src={userIcon} alt='' className='chatImg'/> <p className='txt'> tortor posuere ac ut consequat semper viverra nam libero justo laoreet sit amet cursus sit amet dictum sit amet justo </p>
          </div>
          <div className='chat bot'>
            <img src={gptImgLogo} alt='' className='chatImg'/> <p className='txt'>egestas diam in arcu cursus euismod quis viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat sed cras ornare arcu dui vivamus arcu felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim sit amet venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia at quis risus sed</p>
          </div>

        </div>

        <div className='chatFooter'>
          <div className='inp'>
            <input type='text' placeholder='Send a message' /> <button className='send'> <img src={sendBtn} alt='Send'/> </button>
          </div>
          <p>ChatGPT may produce inaccurate information about people, places or facts. ChatGPT August 20 Version.</p>
        </div>

      </div>
    </div>
  );
}

export default App;