import { h, createRef } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import style from './style';

const Header = () => {
  const [toggled, setToggled] = useState(false);
  const overlayRef = createRef();
  useEffect(() => {
    const html = document.getElementsByTagName("html")[0];
    function scroll() {
      const scrollTop = html.scrollTop;
      const height = document.getElementById("home").offsetHeight;
      if (scrollTop > height) {
        overlayRef.current.setAttribute("style", "opacity: 1;");
      } else {
        const calc = scrollTop / height;
        overlayRef.current.setAttribute("style", `opacity: ${calc};`);
      }
    }
    document.addEventListener('scroll',  scroll);
    document.addEventListener('touchmove',  scroll);
  }, [overlayRef]);
  return (
    <header id="masthead" class="site-header" data-anchor-target=".hero" data-top="background: #161435; padding: 30px 0; box-shadow: 0px 0px 20px 6px rgba(0, 0, 0, 0.2);" data-top-bottom="background: #161435; padding: 30px 0; box-shadow: 0px 0px 20px 6px rgba(0, 0, 0, 0.2);">
      <div class={style.overlay} ref={overlayRef} />
      <nav id="primary-navigation" class="site-navigation">
        <div class="container">
          <div class="navbar-header" onClick={() => setToggled(!toggled)}>
            <button type="button" class={`navbar-toggle collapsed ${toggled ? 'act' : ''}`}
            data-target="#portfolio-perfect-collapse" aria-expanded="false" >
              <span class="icon-bar" />
              <span class="icon-bar" />
              <span class="icon-bar" />
            </button>
          </div>
          <div class={`main-menu ${toggled ? 'act' : ''}`} id="portfolio-perfect-collapse">
            <ul class="nav navbar-nav navbar-right">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#service">Stack</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
