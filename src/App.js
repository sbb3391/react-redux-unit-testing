import Header from "./components/header/Header.component";
import Headline from "./components/headline/Headline.component";
import Button from "./components/button/button.component";
import ListItem from "./components/listItem/listItem.component";
import { connect } from 'react-redux';
import { fetchPosts } from "./actions";
import { useState } from "react";
import PropTypes from 'prop-types'
import './App.css';

const tempArr = [
  {
    fName: "Joe",
    lName: "Bloggs",
    email: "jbloggs@gmail.com",
    age: 31,
    onlineStatus: true
  }
]

function App(props) {

  const [hideBtn, updateHideBtn] = useState(false)

  const fetch = () => {
    props.fetchPosts();
    exampleMethod_updatesState();
  }

  const configButton = {
    buttonText: 'Get Posts',
    emitEvent: fetch
  }

  const exampleMethod_updatesState = () => {
    updateHideBtn(!hideBtn);
  }

  const { posts } = props;

  return (
    <div data-test='appComponent'>
      <Header />
      <section className='main'>
        <Headline header={"Posts"} desc="click the button to render posts" tempArr={tempArr} />
        { !hideBtn && 
          <Button {...configButton} />
        }
        {posts.length > 0 && 
          <div>
            {posts.map((post, index) => {
              const { title, body } = post
              const configListItem = {
                title,
                desc: body
              };
              return(
                <ListItem key={index} {...configListItem} />
              )
            })}
          </div>
        }
      </section>
      
    </div>
  );
}

App.propTypes = {
  posts: PropTypes.array,
  fetchPosts: PropTypes.func
}

const mapStateToProps = state => {
  return {
    posts: state.postsReducer
  }
}
export default connect(mapStateToProps, { fetchPosts })(App);
