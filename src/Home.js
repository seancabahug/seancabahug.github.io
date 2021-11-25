import Typist from 'react-typist';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faAward, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './Home.css';

import 'react-typist/dist/Typist.css';

function Home() {
  return (
    <div className="App">
      <div className="inner">
        <h1>
          <Typist cursor={{ element: "_" }}>
            Sean Cabahug
          </Typist>
        </h1>
        <p>full-stack webdev // cybersecurity // sysadmin</p>
        <div className="icons">
          <a href="https://github.com/seancabahug">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <Link to="/about">
            <FontAwesomeIcon icon={faUser} />
          </Link>
          <a href="https://github.com/seancabahug">
            <FontAwesomeIcon icon={faAward} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Home;