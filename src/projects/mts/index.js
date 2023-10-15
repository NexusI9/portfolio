import { Article, Img, Video, Body, Title, Gallery } from '../../components/Folio';
import gallery from './gallery';

export default () => (
    <>
        <Article data-board-name='Video'>
            <Body flexDirection='vertical' flexAlignement='centered'>
                <Video title='Moon telecommunicaion system' id={516163739} />
            </Body>
        </Article>

        <Article>
            <Title
                label="The concept"
                summary={<p>
                    The Moon Telecommunicaion System (MTS) is an interactive program that detects the user position in a room using a kinect system. <br />
                    The software then interpretes the user shapes and projects it on a high projection canvas among complex UI elements, drawing thus an abstract animated canvas.
                    Then, depending on the user's position in the room, his gestures, as well as the position of the moon in space, the software output differents audio behaviors and frequencies.
                    Peoples may one day sometimes face a very calm and soothing melody, and an other one a chaotic and agressive audiovisual result.
                    From those movements and astral coordinate, an abstract communicaiton emerges between the human and the celestial body. The installation being the canal communication between earth and the space.
                    <br/><br/>
                    A side screen is also set up on the side where the viewer get precise information the moon location.
                </p>}
            />
            <Body flexDirection='vertical' flexAlignement='centered'>
                
                <Gallery galleries={gallery} galleryKey='installation'/>

            </Body>
        </Article>
    </>
);
