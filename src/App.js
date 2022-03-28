import Header from "./components/header/Header.component";
import Headline from "./components/headline/Headline.component";

import './App.css'

function App() {
  return (
    <div>
      <Header />
      <section className='main'>
        <Headline header="Posts" desc="click the button to render posts" />
      </section>
    </div>
  );
}

export default App;
