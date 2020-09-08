import { h } from 'preact';
import style from './style';

const Home = () => (
  <div id="home" class="hero">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h1>Nicole Tobal</h1>
          <svg class={style.underlined} viewBox="0 0 1000 121">
            <path d="M100,100 h600" />
          </svg>
          <div class="page-scroll">
            <p class="job-title">Software Engineer</p>
            <a href="#footer" class="btn btn-fill ">Hire me</a>
            <div class="clearfix visible-xxs" />
            <a href="#portfolio" class="btn btn-border">Explore more</a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
