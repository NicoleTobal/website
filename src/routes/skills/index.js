import { h, createRef } from 'preact';
import ProgressBar from './progressbar';

const skills = [
  {
    name: "React",
    percentage: "100%"
  },  {
    name: "NodeJs",
    percentage: "100%"
  },  {
    name: "Docker",
    percentage: "80%"
  },  {
    name: "Solidity",
    percentage: "60%"
  },  {
    name: "Html/CSS",
    percentage: "80%"
  },  {
    name: "Javascript",
    percentage: "70%"
  },  {
    name: "MongoDB",
    percentage: "80%"
  },  {
    name: "jQuery",
    percentage: "40%"
  },  {
    name: "PostgreSQL",
    percentage: "80%"
  },  {
    name: "Git",
    percentage: "80%"
  },
]

const Skills = () => {
  let sectionRef = createRef();
  return (
    <section class="site-section section-skills" ref={sectionRef}>
      <div class="container">
        <div class="text-center">
          <h3>Skills</h3>
          <img src="/assets/images/lines.svg" class="img-lines" alt="lines" />
        </div>
        <div class="row">
          {
            skills.map((skill, index) => (
              <div class="col-md-4" key={index}>
                <div class="skill">
                  <h4>{skill.name}</h4>
                  <ProgressBar width={skill.percentage} sectionRef={sectionRef} />
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default Skills;
