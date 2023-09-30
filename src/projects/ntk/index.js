import {Article, Body, Video} from '../../components/Folio';


export default () => {

  const ids = [
    '505167495',
    '505166439',
    '505166386',
    '505166503',
    '505170506',
    '505153135',
    '505153204',
    '505153347',
    '505153390',
    '505153439',
    '504913430',
    '505153502',
    '504913682',
    '504914052',
    '505153092',
    '504914368',
    '504914193',
    '504913929',
    '504913784',
    '505153068',
    '505159400'
  ];

    const setBinome = (listId) => {

      const ar = [];
      for(var i = 0; i < listId.length-1; i+=2 ){
        ar.push(
            <Body key={listId[i]}>
              <div><Video title={`NTK video sample ${i}`} id={listId[i]} placeholder={'/assets/thumbnails/ntk/video-'+listId[i]+'.webp'} pending={true} autoplay={true}/></div>
              <div><Video title={`NTK video sample ${i+1}`} id={listId[i+1]} placeholder={'/assets/thumbnails/ntk/video-'+listId[i+1]+'.webp'} pending={true} autoplay={true}/></div>
            </Body>
        )
      }
      return ar;

    }

  return (
    <Article>{setBinome(ids)}</Article>
  );
}
