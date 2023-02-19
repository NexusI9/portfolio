
import { useEffect, useRef } from 'react';

const Board = ({src, title, offsetTop, onClick, active=false, onActive }) => {

  const boardRef = useRef();
  useEffect(() => active && onActive && boardRef.current ? onActive({ref:boardRef.current, top: boardRef.current.offsetTop, height:boardRef.current.getBoundingClientRect().height }) : 0,[onActive]);

  return(
    <>
      <input type='radio' name='board' className={active ? 'active' : ''} id={'radio_'+encodeURI(title)} defaultChecked={active}/>
      <label ref={boardRef} className='board' htmlFor={'radio_'+encodeURI(title)} onClick={ () => onClick && offsetTop ? onClick({offsetTop, src, title}) : 0 } >
        <small className='discrete'>{title}</small>
        <img src={src} alt='screenshots' />
      </label>
    </>
  );
}

export default Board;