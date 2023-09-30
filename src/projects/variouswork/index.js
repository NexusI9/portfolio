import {Article, Body, Video} from '../../components/Folio';

export default () => {

  const ids = [
    '503802076',
    '503802093',
    '503802112',
    '503801972',
    '503801946',
    '503801920',
    '503801889',
    '503801862',
    '503793840',
    '503793865',
    '503793895',
    '503793943',
    '503793967',
    '503793920',
  ];

    const setBinome = (listId) => {

      const ar = [];
      for(var i = 0; i < listId.length-1; i+=2 ){
        ar.push(
            <Body  key={listId[i]}>
              <div><Video title={`Various work video sample ${i}`} id={listId[i]} placeholder={'/assets/thumbnails/various/video-'+listId[i]+'.webp'} pending={true} autoplay={true}/></div>
              <div><Video title={`Various work video sample ${i+1}`} id={listId[i+1]} placeholder={'/assets/thumbnails/various/video-'+listId[i+1]+'.webp'} pending={true} autoplay={true}/></div>
            </Body>
        )
      }
      return ar;

    }

  return (
    <Article>{setBinome(ids)}</Article>
  );
}
