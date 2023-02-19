const Img = ({src, name, alt, className='', id, style, onClick, boardName}) => (
    <section onClick={ () => onClick && name ? onClick({src, alt, className, id, style, name}) : 0 } className={className + ' imgWrapper round ' + (onClick ? 'picLink' : '')} style={style || {}} data-board-name={boardName || ''}><img src={src} alt={alt || 'picture'} className={className || ''} id={id || ''} /><span></span></section>
  );

export default Img;