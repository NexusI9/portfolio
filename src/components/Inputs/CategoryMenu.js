import { useEffect, useState, Fragment } from 'react';
import { motion } from 'framer-motion';
import {
  getCategories,
  changeHashTo,
  scrollToCategory,
  cleanCategoryName
} from '@/lib/utils';
import { connect } from 'react-redux';
import Link from 'next/link';
import { useRouter } from 'next/router';

const mapStateToProps = (state) => ({
  _category: state.flow.category,
  _latestHref: state.flow.href
});

const mapDispatchToProps = (dispatch) => ({
  _setLastAction: (e) => dispatch({ type: 'SET_LAST_ACTION', state: e }),
  _onCategoryChange: (e) => dispatch({ type: 'CHANGE_CATEGORY', category: e }),
});

const CategoryMenu = ({ _category, _onCategoryChange, _setLastAction }) => {

  const router = useRouter();
  const [active, setActive] = useState(_category);

  const onCategoryClick = ({ event, category }) => {
    event.preventDefault();
    _setLastAction('click');
    setActive(category);

    scrollToCategory(category, { behavior: 'smooth' }, _onCategoryChange);

    //update Hash url
    router
      .replace({ hash: changeHashTo(cleanCategoryName(category)) }, undefined, { scroll: false, shallow: true })
      .catch(e => { if (!e.cancelled) throw e; });

    //GA4 event
    //window.gtag('event', `click_menu_category_${category}`, { event_category: 'click', event_label: `Click on category menu: ${category}` });
  }

  useEffect(() => {
    //need to manually add and remove html scroll behavior to only acivate smooth scroll on hash change
    const smoothScroll = () => {
      const html = document.querySelector('html');
      if (html) {
        html.style.scrollBehavior = 'smooth';
      }
    };
    const removeSmoothScroll = () => {
        const html = document.querySelector('html');
       if (html) {
           setTimeout(() => {
               html.style.scrollBehavior = 'unset';
           }, 0);
       }
    };

    router.events.on('hashChangeStart', smoothScroll);
    router.events.on('hashChangeComplete', removeSmoothScroll);
  },[]);

  useEffect(() => { setActive(_category); }, [_category]); //upadte category menu active category

  return (
    <motion.div
      key='category_menu'
      id='category_menu'
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }}
      exit={{ opacity: 0, y: -100, transition: { type: 'spring', stiffness: 100 } }}
    >
      <ul>
        {getCategories().map((cat, i) =>
          <Fragment key={`categoryMenu_${cat}`}>
            <li className={active === cat ? 'active' : undefined}>
              <Link
                onClick={(e) => onCategoryClick({ event: e, category: cat })}
                href={changeHashTo(cleanCategoryName(cat))}
                scroll={false}
                replace
              >
                <small className='cacheBold'><b>{cat}</b></small>
                <small>{cat}</small>
              </Link>
            </li>
            {i < getCategories().length - 1 && <span className='lineSeparator'></span>}
          </Fragment>
        )}
      </ul>
    </motion.div>

  );

}


export default connect(mapStateToProps, mapDispatchToProps)(CategoryMenu);