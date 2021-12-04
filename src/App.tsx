
import './App.css';
import "nes.css/css/nes.min.css";
import { FC } from 'react';
import Cards from './components/cards';

const App: FC =() => {
  return (
    <div className="parent">
  <div id="pageHeader">
  <span className="nes-text is-primary">Primary</span>
  <div>
    
  <i className="nes-ash"></i>
  <i className="nes-pokeball"></i>
  <i className="nes-bulbasaur"></i>
  <i className="nes-charmander"></i>
  <i className="nes-squirtle"></i>
  <i className="snes-logo"></i>
  </div>
  </div>
  <article id="mainArticle">
    <div id='container' className="nes-container is-centered is-dark with-title">
  <p className="title">Container.is-dark</p>
 <Cards/>
 
</div></article>
  <nav id="mainNav">Nav</nav>
  <div id="siteAds">Ads</div>
  <footer id="pageFooter">Footer</footer>    </div>
  );
}

export default App;
