import ButtonGradient from './assets/svg/ButtonGradient';
import Button from './components/Button';
import Headder from './components/Headder';
import Hero from './components/Hero';
import Projects from './components/Projects';

const App = () => {

  return (
    <>
    <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
      <Headder />
      <Hero />
      <Projects />
    </div>
   <ButtonGradient />
   </>
  );
}

export default App