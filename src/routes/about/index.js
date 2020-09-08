import { h } from 'preact';

const AboutMe = () => (
  <section id="about" class="site-section section-about text-center">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h2>About me</h2>
                <img src="assets/images/lines.svg" class="img-lines" alt="lines" />
                <img src="assets/images/me.jpg" class="profile-img" /> 
                <p>Hello! I'm Nicole, a Software Engineer and fullstack developer who loves building software solutions. Also I'm experienced in Blockchain, mainly Ethereum. I live in Argentina and I'm currently available for a remote job position or freelance work. If you have a project in which you consider me suitable, then get in touch.</p>
            </div>
        </div>
    </div>
  </section>
);

export default AboutMe;
