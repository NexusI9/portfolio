import { useEffect, useState } from 'react';

const Multi = ({eng, fr, zh, language}) => {
    const [content, setContent] = useState(eng);
  
    useEffect(() => {
  
        switch (language) {
          case 'english':
            setContent(eng);
          break;
  
          case 'french':
            setContent(fr);
          break;
  
          case 'zhongwen':
            setContent(zh);
          break;
  
          default:
            setContent(eng);
        }
  
  
    },[language,eng,fr,zh]);
    return( <>{content}</> );
  }


export default Multi
