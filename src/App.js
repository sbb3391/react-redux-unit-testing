import Header from "./components/header/Header.component";
import Headline from "./components/headline/Headline.component";

import './App.css'

const tempArr = [
  {
    fName: "Joe",
    lName: "Bloggs",
    email: "jbloggs@gmail.com",
    age: 31,
    onlineStatus: true
  }
]

function App() {
  return (
    <div>
      <Header />
      <section className='main'>
        <Headline header={"Posts"} desc="click the button to render posts" tempArr={tempArr} />
      </section>
    </div>
  );
}

export default App;
