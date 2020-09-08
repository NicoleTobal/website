import { h } from 'preact';

const Carousel = ({ slides }) => {
  return (
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        {slides.map((slide, index) => (
          <li data-target="#carouselExampleIndicators" data-slide-to={index} class={index === 0 ? 'active' : ''} key={index} />
        ))}
      </ol>
      <div class="carousel-inner">
        {slides.map((slide, index) => (
          <div class={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
            {slide}
          </div>
        ))}
      </div>
      <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true" />
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true" />
        <span class="sr-only">Next</span>
      </a>
    </div>
  );
}

export default Carousel;
