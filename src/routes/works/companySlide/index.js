import { h } from 'preact';

const CompanySlide = ({ slide: { image, text, url }}) => (
  <div class="slide-container"> 
    <img class="img-res" src={`/assets/images/${image}`} alt="" />
    {text}
    <a href={url} target="_blank" rel="noopener noreferrer" class="btn btn-fill ">Visit</a>
  </div>
);

export default CompanySlide;
