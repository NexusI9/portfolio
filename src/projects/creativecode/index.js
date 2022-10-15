import {Article, Body, Video} from '../../components/article';
import {useEffect, useState} from 'react';


export default () => {

  const ids = [
    '504311223',
    '504311179',
    '504336208',
    '504336155',
    '504336088',
    '504336283',
    '513747850',
  ];

    const setBinome = (listId) => {

      const ar = [];
      for(var i = 0; i < listId.length-1; i+=2 ){
        ar.push(
          <Article key={listId[i]}>
            <Body>
              <div><Video id={listId[i]} placeholder={'/assets/thumbnails/cc/'+listId[i]+'.jpg'}/></div>
              <div><Video id={listId[i+1]} placeholder={'/assets/thumbnails/cc/'+listId[i+1]+'.jpg'} /></div>
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
