import { Link } from "react-router-dom";
import FoxCanvas from './canvas/FoxCanvas';
import { arrow } from "../assets/icons";

const CTA = () => {

  return (
    <section className='cta'>
      <div className="flex flex-row w-full items-center justify-between">
        <div className="flex-1">

          <p className='cta-text'>
            Have a project in mind? <br className='sm:block hidden' />
            Let’s build something together!
          </p>
          <Link to='/contact' className='btn'>
            Contact Me
          </Link>
        </div>
        <div className="flex-1">
          <FoxCanvas />
        </div>
      </div>
    </section>
  );
};

export default CTA;
