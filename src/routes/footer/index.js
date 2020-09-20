import { h } from 'preact';
import Waves from './waves';
import style from './style';

const Footer = () => (
  <div>
    <Waves />
    <footer id="footer" class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-sm-4 col-xs-12">
            <a title="Linkedin" class="icon linkedin-bg" href="https://www.linkedin.com/in/nicole-tobal-767774b8/" target="_blank" rel="noopener noreferrer"><i class="icon-linkedin" /></a>
            <a title="Github" class="icon github-bg" href="https://github.com/NicoleTobal" target="_blank" rel="noopener noreferrer"><i class="icon-github" /></a>
            <p class={style.email}><a title="Gmail" href="https://mail.google.com/mail/?view=cm&fs=1&to=nickytobal@gmail.com" target="_blank" rel="noopener noreferrer">nickytobal@gmail.com</a></p>  
          </div>
          <div class="col-sm-4 col-sm-offset-0 col-xs-6 col-xs-offset-3">
            <p class="copyright">Credits:</p>
            <p class="copyright">Images: <a href="https://www.freepik.com/" target="_blank" rel="noopener noreferrer">Freepik</a> </p>
            <p class="copyright">Icons: <a href="https://www.flaticon.com" target="_blank" rel="noopener noreferrer">Flaticon</a> </p>
            <p class="copyright">Animations: <a href="https://codepen.io" target="_blank" rel="noopener noreferrer">Codepen</a> </p>
          </div>
          <div class="col-sm-4 col-xs-3">
            <div class="page-scroll">
              <a class="icon up-bg" href="#home"><i class="icon-up" /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
);

export default Footer;
