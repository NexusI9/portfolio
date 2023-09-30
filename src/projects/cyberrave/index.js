import {Article, Body, Video, Gallery} from '../../components/Folio';


const galleryRoutes = {
  g1:[
    {type:'split', folder:'/cyberrave',pictures:['cr_1','cr_4','cr_2']},
    {type:'base', folder:'/cyberrave',pictures:['cr_8','cr_3','cr_5']},
    {type:'split', folder:'/cyberrave',pictures:['cr_6','cr_7']}
  ]
}

export default () => (
  <>

    <Article spaced={true}>
      <Body flexDirection='vertical'>
        <Gallery galleries={galleryRoutes} galleryKey='g1'/>
      </Body>
    </Article>


    <Article spaced={true}>
      <Body flexDirection='horizontal'>
        <h2 className='h1'>EBM dans ta tête</h2>
        <div><Video title='Cyber Techno rave Video 1' id={503762124} style={{aspectRatio:"1/1"}} /></div>
      </Body>
    </Article>

    <Article spaced={true}>
      <Body flexDirection='horizontal' className='reverse'>
          <div><Video title='Cyber Techno rave Video 2' id={503762148} style={{aspectRatio:'1/1'}}/></div>
          <h2 className='h1'>QUEEN:R Soundsystem</h2>
      </Body>
    </Article>

  </>
);
