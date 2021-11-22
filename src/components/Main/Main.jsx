import logo from '../../logo.svg';
import './Main.scss';
import video from '../../assets/video.svg';
import Button from '../Button/Button';

const Main = () =>{
  return (
    <div className="main">
      <section className="main-section">
        <div class="main-content">
          <h1><strong>o9 Digital Brain</strong></h1>
          <p>Integrated planning, analytics, and data platform transforming supply chain, revenue, and P&L decision-making at global enterprises for digital age speed and scale.</p>
          <Button route="/" className="btn" title="Learn More"></Button>
        </div>
        <div class="main-video">
          <video width="320" height="240" controls>
            <source src="movie.mp4" type="video/mp4"></source>
          </video>
        </div>
      </section>
    </div>
  );
}

export default Main;
