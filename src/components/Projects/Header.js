import { motion } from "framer-motion";
import zhConvertor from "zhconvertor";
import { useEffect, useRef } from "react";

const Header = ({ project }) => {
  const imgBanner = useRef();

  useEffect(() => {

    const onScroll = () => {

      const scrollPos = window.pageYOffset;
      if (imgBanner.current) {
        imgBanner.current.style.transform = `translateY(-${scrollPos / 6}px)`;
      }

    }

    if (imgBanner.current) {
      window.addEventListener('scroll', onScroll);
    }

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      className='project-banner'
      key={'projectBanner' + project.title}
      initial={{ opacity: 1 }}
      animate={{ opacity: 1, transition: { duration: 0.3 } }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
    >
      <img alt='project banner' ref={imgBanner} src={(project.banner || project.thumbnail)} />

      <div className="project-banner-content">
        <h1>{zhConvertor.t2s(project.title)}</h1>
        <div>
          <section>
            {project.desc &&
              <div>
                <h5>Summary</h5>
                <p>{project.desc || ' '}</p>
              </div>
            }

            {project.category && <div>
              <h5>Categories</h5>
              <section className='project_category' >{project.category.map((item, i) => <p key={'cat' + item}>{i < project.category.length - 1 ? <>{item}<span className='dottySeparator'></span></> : item}</p>)}</section>
            </div>
            }
            <br />
            <p>{project.date}</p>
          </section>
          <section>
            <h5>About the project</h5>
            <p className='project_long_desc'>{project.longdesc || ''}</p>
          </section>

        </div>
      </div>
    </motion.header>
  );
}

export default Header;

