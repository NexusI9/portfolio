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
          <Article key={listId[i]}>
            <Body>
              <div><Video id={listId[i]} placeholder={'/assets/thumbnails/various/'+listId[i]+'.jpg'} pending={true} autoplay={true}/></div>
              <div><Video id={listId[i+1]} placeholder={'/assets/thumbnails/various/'+listId[i+1]+'.jpg'} pending={true} autoplay={true}/></div>
            </Body>
          </Article>
        )
      }
      return ar;

    }

  return (
    <>{setBinome(ids)}</>
  );
}
