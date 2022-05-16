import './App.css';
import requests from './request';
import Rows from './Rows';
import Banner from './Banner';
import Nav from './Nav';

function App() {
  return (
    <div  className='app'>
     
      <Banner/>
      <Nav/>
      <Rows title="NETFLIX ORIGINAL" fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
      <Rows title="Trending Now" fetchUrl={requests.fetchTrending}/>
      <Rows title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Rows title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Rows title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Rows title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Rows title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
      <Rows title="Documentaries" fetchUrl={requests.fetchDocumantaries}/>


    </div>
  );
}

export default App;
