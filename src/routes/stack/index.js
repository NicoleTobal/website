import { h } from 'preact';

const Stack = () => (
  <section id="service" class="site-section section-services overlay text-center">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h3>Stack</h3>
          <img src="/assets/images/lines.svg" class="img-lines" alt="lines" />
        </div>
        <div class="col-sm-4">
          <div class="service">
            <h4>Front-end</h4>
            <p>As a javascript developer, I focus on giving the best web experience to users, with an optimized code and an error proofing interface.</p>
          </div>
        </div>
        <div class="col-sm-4 left-border">
          <div class="service">
            <h4>Back-end</h4>
            <p>When building backend services, such as rest APIs or running processes, I apply the best secure practices with the available resources.</p>
          </div>
        </div>
        <div class="col-sm-4 left-border">
          <div class="service">
            <h4>Devops</h4>
            <p>Automatization and integration are two basic concepts I bear in mind in any application I build in order to save time and prevent human mistakes.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Stack;
