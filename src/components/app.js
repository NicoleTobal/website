import { h } from 'preact';
import Header from './header';
import Home from '../routes/home';
import AboutMe from '../routes/about';
import Skills from '../routes/skills';
import Stack from '../routes/stack';
import Works from '../routes/works';
import Footer from '../routes/footer';

export default function App () {
  return (
    <div id="app">
      <Header />
      <Home />
      <AboutMe />
      <Skills />
      <Stack />
      <Works />
      <Footer />
    </div>
  );
}
