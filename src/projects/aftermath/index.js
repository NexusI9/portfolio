import {Article, Body, Title, Video, Img} from '../../components/Folio';


export default () => (
  <>
	<Article spaced={true}>
		<Body flexDirection='vertical' flexAlignement='centered'>
      		<Video id={503040529}/>
		</Body>
    </Article>
	
	<Article spaced={true}>
		<Title 
				label='For a deeper understanding'
				summary={<>Aftermath is a short animation series exploring the narrative potential of an environment without the direct involvement of human being in its core.
					<br /><br />It is by looking for an implicit way to explore the ecological behavior of the human in its environment that the series ends up focusing not on the human being itself, but rather on its print, its waste and its remnant as a way to suggest and narrate the purpose of the environment.
					</>}
				className='half'
			/>
	</Article>


	<Article>
		<Body flexDirection='vertical' flexAlignement='centered'>
			<Img src="/assets/projects/aftermath/af2_1.webp" alt="aft" />
			<Img src="/assets/projects/aftermath/af2_2.webp" alt="aft" />
			<Img src="/assets/projects/aftermath/af1_4.webp" alt="aft" />
			<Img src="/assets/projects/aftermath/af1_2.webp" alt="aft" />
			<Img src="/assets/projects/aftermath/af3_1.webp" alt="aft" />
			<Img src="/assets/projects/aftermath/af3_4.webp" alt="aft" />
			<Img src="/assets/projects/aftermath/af3_5.webp" alt="aft" />
			<Img src="/assets/projects/aftermath/frame1.webp" alt="aft" />
			<Img src="/assets/projects/aftermath/frame2.webp" alt="aft" />
		</Body>
	</Article>
  </>
);
