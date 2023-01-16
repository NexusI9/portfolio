import { Img, Video, Body, Title, Article, Space } from '../../components/article';
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
			<Img src="/assets/projects/aftermath/af2_1.jpg" alt="aft" />
			<Img src="/assets/projects/aftermath/af2_2.jpg" alt="aft" />
			<Img src="/assets/projects/aftermath/af1_4.jpg" alt="aft" />
			<Img src="/assets/projects/aftermath/af1_2.jpg" alt="aft" />
			<Img src="/assets/projects/aftermath/af3_1.jpg" alt="aft" />
			<Img src="/assets/projects/aftermath/af3_4.jpg" alt="aft" />
			<Img src="/assets/projects/aftermath/af3_5.jpg" alt="aft" />
			<Img src="/assets/projects/aftermath/frame1.jpg" alt="aft" />
			<Img src="/assets/projects/aftermath/frame2.jpg" alt="aft" />
		</Body>
	</Article>
  </>
);
