import {
  getCategories,
  getZhongwenOfCategory,
  changeHashTo,
  currentHash,
  scrollToCategory,
  cleanCategoryName
} from '@/lib/utils';
import CategoryContainer from './CategoryContainer';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import BackgroundHeader from './BackgroundHeader';
import { connect } from 'react-redux';

const mapStateToPorps = (state) => ({
  _category: state.flow.category,
  _lastAction: state.flow.lastAction,
  _lastHref: state.flow.href
});

const mapDispatchToProps = (dispatch) => ({
  _onCategoryChange: (cat) => dispatch({ type: 'CHANGE_CATEGORY', category: cat }),
  _setLastAction: (e) => dispatch({ type: 'SET_LAST_ACTION', state: e })
});

const Flow = ({ projects, _onCategoryChange = (e) => 0, _setLastAction = (e) => 0, _category, _lastAction }) => {

  const containerRef = useRef([]);
  const categories = useRef(getCategories());
  const router = useRouter();
  const [displaySuper, setDisplaySuper] = useState(true);
  const [category, setCategory] = useState();


  useEffect(() => {
    
    const checkViewportDiv = () => {

      if (_lastAction !== 'scroll') { return; }

      getCategories().forEach((cat, c) => {
        if (!containerRef.current.length) { return; }
        const container = containerRef.current[c];
        const title = cat;
        const { top, bottom } = container.getBoundingClientRect();

        const scrollTop = window.pageYOffset;
        const windowHeight = window.innerHeight;

        if (
          (scrollTop < windowHeight) ||
          (c === containerRef.current.length - 1 && bottom < window.innerHeight / 3)
        ) {
          _onCategoryChange(" ");
        }

        if (
          top < window.innerHeight / 4 &&
          bottom > window.innerHeight &&
          category !== title
        ) {
          _onCategoryChange(title);
        }


      });
    }


    //if user clicked on "a" from categorymenu then prevent hash change from this userEffect ( give priority to categorymenu hash change )
    const onClick = ({ target }) => {
      if (!/(path|svg)/.test(target.nodeName)) { _setLastAction('click'); }
    };
    const onMouseWheel = () => _setLastAction('scroll');
    const onResize = (e) => setDisplaySuper(e.matches);

    checkViewportDiv();

    window.addEventListener('scroll', checkViewportDiv, { passive: true });
    window.addEventListener('click', onClick);
    window.addEventListener('mousewheel', onMouseWheel);

    const mq = window.matchMedia('(min-width:800px)');
    onResize(mq);
    mq.addEventListener('change', onResize);

    return () => {
      window.removeEventListener('scroll', checkViewportDiv);
      window.removeEventListener('click', onClick);
      window.addEventListener('mousewheel', onMouseWheel);
      mq.removeEventListener('change', onResize);
    };

  }, [_lastAction]);

  //on scroll action
  useEffect(() => {

    if (_lastAction === 'scroll') {
      router.replace(changeHashTo(cleanCategoryName(_category)), undefined, {scroll:false});
    }
    setCategory(_category);
  }, [_category]);

  //on init
  useEffect(() => {
    //check if Href corressponds to a category
    const currentCategory = currentHash(router);
    if (currentCategory) {
      switch (_lastAction) {

        case 'click': // come back from project or internal page
          scrollToCategory(currentCategory, { behavior: 'auto' });
          break;

        default:
          getCategories().map(cat => cleanCategoryName(cat) === currentCategory && _onCategoryChange(cat));
      }
    }

  }, []);


  return (
    <>
      <AnimatePresence>
        {displaySuper &&
          <motion.div
            id="categorySuper"
            key={'catsuper' + category + router.asPath}
          >
            {router.pathname === "/" && <BackgroundHeader title={category} zhongwen={getZhongwenOfCategory(category)} />}
          </motion.div>
        }
      </AnimatePresence>

      <div id="projects">
        {
          categories.current.map((cat, c) =>
            <CategoryContainer
              key={'CategoryContainer_' + c}
              category={cat}
              projects={projects}
              innerRef={el => containerRef.current[c] = el}
            />)}
      </div>

    </>
  );
}

export default connect(mapStateToPorps, mapDispatchToProps)(Flow);
