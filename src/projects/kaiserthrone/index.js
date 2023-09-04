import { Article, Img, Video, Body, Title } from '../../components/Folio';

export default () => (
  <>
    <Article data-board-name='Music video'>
      <Body flexDirection='vertical' flexAlignement='centered'>
        <Video id={502594756} />
      </Body>
    </Article>

    <Article>
      <Title
        label="Synopsis"
        summary={<i>In an irregular lab based in a deserted and strayed factory, an uncanny event lead to the malfunction of the chemical stability system of the ongoing experiment. The wild nature of the lab built with modest equipment cannot hold that much compulsion. The beast is unleashed and is now spreading...</i>}
      />
      <Body flexDirection='vertical' flexAlignement='centered'>

        <Img className="paint" alt="kaiser" src="/assets/projects/kaiserthrone/k_1.webp" />
        <Img className="paint" alt="kaiser" src="/assets/projects/kaiserthrone/k_2.webp" />
        <Img className="paint" alt="kaiser" src="/assets/projects/kaiserthrone/k_3.webp" />
        <Img className="paint" alt="kaiser" src="/assets/projects/kaiserthrone/k_4.webp" />
        <Img className="paint" alt="kaiser" src="/assets/projects/kaiserthrone/k_5.webp" />
        <Img className="paint" alt="kaiser" src="/assets/projects/kaiserthrone/k_6.webp" />
        <Img className="paint" alt="kaiser" src="/assets/projects/kaiserthrone/k_7.webp" />
        <Img className="paint" alt="kaiser" src="/assets/projects/kaiserthrone/k_8.webp" />
        <Img className="paint" alt="kaiser" src="/assets/projects/kaiserthrone/k_9.webp" />
        <Img className="paint" alt="kaiser" src="/assets/projects/kaiserthrone/k_10.webp" />
        <Img className="paint" alt="kaiser" src="/assets/projects/kaiserthrone/k_11.webp" />
        <Img className="paint" alt="kaiser" src="/assets/projects/kaiserthrone/k_12.webp" />
        <Img className="paint" alt="kaiser" src="/assets/projects/kaiserthrone/k_13.webp" />
        <Img className="paint" alt="kaiser" src="/assets/projects/kaiserthrone/k_14.webp" />
        <Img className="paint" alt="kaiser" src="/assets/projects/kaiserthrone/k_15.webp" />
      </Body>
    </Article>
  </>
);
