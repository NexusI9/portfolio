
import { useRouter } from 'next/router';
import Head from 'next/head';
import {
  getRandomProject,
  getAllProjects
} from '@/lib/utils';
import { Suggestion, Header } from '@/components/Projects';
import { PercentBar } from '@/components/Props';
import { Socials, Signature } from '@/components/Statics';
import { useEffect, useState, useRef } from 'react';
import { Loader } from '@/components/Loader';
import { motion, AnimatePresence } from 'framer-motion';
import { connect } from 'react-redux';
import { STATIC_IMPORTS } from '@/lib/projects';

const mapDispatchToProps = (dispatch) => ({
  _setSkin: (e) => dispatch({ type: 'SWITCH_SKIN', skin: e }),
});


function Project({_setSkin, project, req }) {

  //elements
  const suggestions = (project && { current: getRandomProject({ number: 3, project: project[0] }) }) || useRef();
  const Index = project?.map(({ title }) => STATIC_IMPORTS[title])[0];

  //project content
  const [projectContainer, setProjectContainer] = useState();

  //css / transitions
  const [showSideBar, setShowSideBar] = useState(true);

  const [whiteMenu, setWhiteMenu] = useState(true);
  const [displayHeader, setDisplayHeader] = useState(true);

  const handleLoadComplete = () => {
    suggestions.current = getRandomProject({ number: 3, project: project });
  }


  useEffect(() => {

    if (!project) { return; }

    const onScroll = () => {

      const scrollPos = window.pageYOffset;
      //sidebar & suggestion
    
      if (scrollPos > projectContainer?.offsetHeight) { setShowSideBar(false); }
      else { setShowSideBar(true); }

      if (!projectContainer) { return; }

      if (projectContainer.getBoundingClientRect().top > 0) {
        setWhiteMenu(true);
        setDisplayHeader(true);
      } else {
        setWhiteMenu(false);
        if (!window.matchMedia('(max-width:825px)').matches) { setDisplayHeader(false); }
      }

    }

    project.map(({ skin }) => _setSkin(skin));

    window.addEventListener('scroll', onScroll);
    onScroll();

    return () => window.removeEventListener('scroll', onScroll);

  }, [project, projectContainer]);

  useEffect(() => {

    const menu = document.querySelector('#menu');
    if (whiteMenu) { menu.classList.add('white'); }
    else { menu.classList.remove('white'); }

    return () => {
      menu.classList.remove('white');
    };

  }, [whiteMenu]);


  return (
    <>
      <Head>
        <title>{(project.map(({ title }) => `${title} | Nassim El Khantour`))}</title>
      </Head>

      {project?.map(pj =>
        <AnimatePresence key={pj.folder} mode='wait'>
          <Loader
            key={'LOADER' + pj.title}
            title={pj.title}
            background={pj.banner}
            font={pj.font}
          >
            <AnimatePresence mode='wait'>
              {displayHeader && <Header project={pj} />}
            </AnimatePresence>

            <motion.div
              id='project'
              key={`projectContainer${pj.title}`}
              exit={{ opacity: 0, transition: { duration: 0.3 } }}
              ref={(e) => setProjectContainer(e)}
            >
              {showSideBar && <PercentBar />}
              {Index && <Index />}
            </motion.div>

            <Suggestion projects={suggestions.current} display={!showSideBar} />

            <Signature />
            <Socials minify={true} />

          </Loader>
        </AnimatePresence>
      )}

    </>);

}


// Generates `/movies/1` and `/movies/2`
export async function getStaticPaths() {
  const projects = getAllProjects();

  return {
    paths: projects.map(({ title }) => ({ params: { title: title.toString() } })),
    fallback: false, // can also be true or 'blocking'
  }
}
// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps({ params }) {
  const projects = getAllProjects();
  const project = projects.filter(pj => pj.title.toString() == params.title.toString());

  return {
    props: {
      project: project,
    } // Passed to the page component as props
  }
}

export default connect(null, mapDispatchToProps)(Project);
