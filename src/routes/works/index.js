import { h } from 'preact';
import Carousel from './carousel';
import CompanySlide from './companySlide';
import style from './style';

const slides = [
  {
    image: "stablepay-logo.svg",
    text: <p>While working with the StablePay team, a decentralized payment platform, I mainly developed tasks in the frontend using React and NextJs, while at the same time integrating with APIs and adding automatized tests.</p>,
    url: "https://stablepay.io/"
  },
  {
    image: "veinte-logotipo.png",
    text: (
      <p>In Veinte, a cryptocurrency exchange platform, I designed the architecture and developed the web application using ReactJs in the frontend and Nodejs in the backend with MongoDB. I used Swagger for documentation, automatized testing tools and GitlabCi for continuous integration. What is more, I developed two libraries in npm used in the project:
        <li><a href="https://www.npmjs.com/package/@veinte_desarrollo/amount-formatter" target="_blank" rel="noopener noreferrer">Amount formatter</a></li>
        <li><a href="https://www.npmjs.com/package/@veinte_desarrollo/coin-coverter" target="_blank" rel="noopener noreferrer">Coin converter</a></li>
      </p>
    ),
    url: "https://veinte.net/"
  },
  {
    image: "kabalance-logo.png",
    text: <p>For Kabalance, a fitness food store, I developed the landing page using Preact and used my <a href="https://github.com/NicoleTobal/food-order-processing" target="_blank" rel="noreferrer">Food Delivery</a> code to handle food orders coming from a bot made with Dialog Flow.</p>,
    url: "https://kabalance.com/"
  },
];

const Works = () => (
  <section id="portfolio" class="site-section section-portfolio">
    <div class={`container ${style.personalWorks}`}>
      <div class="text-center">
        <h3>Recent works</h3>
        <img src="/assets/images/lines.svg" class="img-lines" alt="lines" />
      </div>
      <div class="row">
        <div class="col-md-4 col-xs-6">
          <div class="portfolio-item">
            <div class="text">
              <h4>FOOD DELIVERY</h4>
              <p>A Nodejs backend service that interacts with DialogFlow in order to receive food orders and Slack to communicate the food company when a new order arrives, storing the data in a PostgreSql database.</p>
              <a href="https://github.com/NicoleTobal/food-order-processing" target="_blank" rel="noreferrer"><i class="icon-github" /></a>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-xs-6">
          <div class="portfolio-item">
            <div class="text">
              <h4>CHECK BALANCE</h4>
              <p>A simple web application which uses React and Nodejs with Express and interacts with a cryptocurrency exchange API in order to show the balance of an account.</p>
              <a href="https://github.com/NicoleTobal/balance-checker" target="_blank" rel="noreferrer"><i class="icon-github" /></a>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-xs-6">
          <div class="portfolio-item">
            <div class="text">
              <h4>MOVIES API REST</h4>
              <p>An API rest service which uses Nodejs with Fastify and Mysql as database, that stores, deletes, edits and retrieves movies.</p>
              <a href="https://github.com/NicoleTobal/api-rest-peliculas" target="_blank" rel="noreferrer"><i class="icon-github" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Carousel slides={slides.map(slide => <CompanySlide slide={slide} /> )} />
  </section>
);

export default Works;
