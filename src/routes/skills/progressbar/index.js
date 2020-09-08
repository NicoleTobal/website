import { h, createRef } from 'preact';
import { useEffect } from 'preact/hooks';

const ProgressBar = ({ width, sectionRef }) => {
  let progressbarRef = createRef();
  useEffect(() => {
    const section = sectionRef.current;
    const html = document.getElementsByTagName("html")[0];
    function loadDaBars() {
      progressbarRef.current.style.transitionDelay = 500;
      progressbarRef.current.style.width = width;
    }
    function scroll() {
      const scrollOffset = html.scrollTop;
      const containerOffset = section.offsetTop - 200;
      if (scrollOffset > containerOffset) {
        loadDaBars();
      }
    }
    document.addEventListener('scroll',  scroll);
    document.addEventListener('touchmove',  scroll);
  }, [sectionRef, progressbarRef, width]);
  return (
    <div class="progress">
      <div class="progress-bar" itemType="progressbar" ref={progressbarRef} />
    </div>
  );
};

export default ProgressBar;
