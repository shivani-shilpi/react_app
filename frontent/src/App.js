import logo from './logo.svg';
import './App.css';
import { createContext, useState} from 'react';
import React from 'react';
import FileForm from './components/FileForm';
import LatestImage from './components/LatestImage';
import Header from 'components/Header';
import Footer from 'components/Footer';
import MainContent from 'components/MainContent';
import ContactCard from 'components/ContactCard';
import Joke from 'components/Joke';
import jokesData from 'components/JokesData';


export const AppContext = createContext(null);

// function App() {
//   const [latestBook, setLatestBook] = useState(AppContext);
//   const jokeComponents = jokesData.map(joke => <Joke key={joke.id } question={joke.question} punchline={joke.punchline} />)
  
//  return (
//     <AppContext.Provider value={{latestBook, setLatestBook}}>
//       <div className="contacts">
        {/* <Header/>
         <MainContent/>
         <Footer/> */}
        //  <FileForm />
        //  <LatestImage />
        {/* <ContactCard
         name="Mr. Rangila"
           imgUrl="https://bobbyhadz.com/images/blog/react-prevent-multiple-button-clicks/thumbnail.webp"
          phone="7835733093"
          email="rangila@gmail.com"
        />
         <ContactCard
          contact = {{name: "Mr. Rangila", imgUrl: "https://bobbyhadz.com/images/blog/react-prevent-multiple-button-clicks/thumbnail.webp",  phone: "7835733093", email: "rangila@gmail.com" }}
        />

         <ContactCard
           contact = {{name: "mr. Smith", imgUrl: "https://bobbyhadz.com/images/blog/react-prevent-multiple-button-clicks/thumbnail.webp", phone: "3374749", email: "smith@gmail.com"}}
       /> */}
//       </div>
//     </AppContext.Provider>  
//   );
// }

// class App extends React.Component {
//   constructor(){
//     super()
//     this.state = {
//       loading: false,
//       character: {}
//     }
//   }

//   componentDidMount(){
//     this.setState({loading: true})
//     fetch("http://localhost:3000/api/v2/show/1")
//       .then(response => response.json())
//       .then(data => {
//         this.setState({
//           loading: false,
//           character: data
//       })
//     })
//   }

//   render(){
//     const text = this.state.loading ? "Loading..." : this.state.character.name
//     return(
//       <div>
//          <p>{text}</p>
//       </div>
//     )
//   }
// }
class App extends React.Component {
  constructor(){
    super()
    this.state = {
      loading: false,
      character: {}
    }
  }

  componentDidMount(){
    this.setState({loading: true})
    fetch("http://localhost:3000/api/v2/show/2")
    .then(response => response.json())
    .then(data => {
        this.setState(
          {
            character: data,
            loading: false
          }
        )
      }
    )
  }

  render(){
    const text = this.state.loading ? "Loading" : this.state.character.name
    return(
      <div>
        <p>{text}</p>
      </div>
    )
  }
}

export default App;
