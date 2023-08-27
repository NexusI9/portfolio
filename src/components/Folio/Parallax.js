import { useEffect, useRef } from 'react';

const Parallax = ({ src = '/', step = 20, initStep = 50, title, description }) => {

  const img = useRef();
  const container = useRef();

  useEffect(() => {

    const onScroll = () => {
      const { top, height } = container.current.getBoundingClientRect();
      const { innerHeight } = window;
      const velocity = (top - height) / innerHeight * step;

      if (top < innerHeight && top > -1 * height) {
        img.current.style.transform = `translate3d(0,-${initStep + velocity}%,0)`;
      }
    }

    img.current.style.transform = `translate3d(0,-${initStep}%,0)`;

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className='parallax' ref={container}>
      <div className='parallax-picture'>
        <img src={src} ref={img} />
      </div>
      {
        (title || description) &&
        <div className='container parallax-header'>
          <header className='half round card'>
            {title && <h2>{title}</h2>}
            {description && <p>{description}</p>}
          </header>
        </div>
      }
    </div>
  );
}


export default Parallax;