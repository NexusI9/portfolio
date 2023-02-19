import { Multi } from '../Inputs';
import logo_iup from '../../assets/logos/IUP_logo.png';
import logo_ensad from '../../assets/logos/ensad-nancy_1.png';
import Label from './Label';
import Content from './Content';

const Edu = ({language}) => (
    <>
      <Content
        header={
          <Label ico={logo_ensad}>
          <Multi
            eng='DNSEP (Superior National Diploma of Plastic Expression) with summa cum laude'
            fr='DNSEP (Diplôme National Supérieur d’Expression Plastique) obtenu avec les félicitations du jury'
            zh='DNSEP (Superior National Diploma of Plastic Expression) 以最優等的成績畢業'
            language={language}/>
            </Label>
          }
        body={
          <Multi
            eng={<small>Master's degree in Digital Art.</small>}
            fr={<small>Master en Art Numérique.</small>}
            zh={<small>數位藝術碩士</small>}
            language={language}/>
        }
        detail={
          <Multi
            eng={<>ENSAD (École Nationale Supérieure d’Art et de Design) <br />2019 - 2020 :: Nancy, France </>}
            fr={<>ENSAD (École Nationale Supérieure d’Art et de Design) <br />2019 - 2020 :: Nancy, France </>}
            zh={<>ENSAD (École Nationale Supérieure d’Art et de Design) <br />2019 至 2020 | 南錫，法國</>}
            language={language}/>
        }
      />

      <Content
        header={
          <Label ico={logo_iup}>
          <Multi
            eng='Web & Game Design, Illustration, 3D Animation'
            fr='Web & Game Design, illustration et animation 3D'
            zh='網絡與遊戲設計 、 插圖 、 3D動畫'
            language={language}/>
            </Label>
          }
        body={
          <Multi
            eng={<small>International exchange program.</small>}
            fr={<small>Programme d’échange international.</small>}
            zh={<small>交換項目</small>}
            language={language}/>
        }
        detail={
          <Multi
            eng={<>IUP (Indiana University of Pennsylvania) <br /> 2018 - 2019 :: Indiana (PA), USA </>}
            fr={<>IUP (Indiana University of Pennsylvania) <br /> 2018 - 2019 :: Indiana (PA), USA</>}
            zh={<>IUP (Indiana University of Pennsylvania) <br /> 2018 至 2019 :: 印第安納 (PA)，美國</>}
            language={language}/>
        }
      />

      <Content
        separator={false}
        header={
          <Label ico={logo_ensad}>
          <Multi
            eng='DNA (National Diploma of Art) with honors'
            fr='DNA (Diplôme National d’Art) obtenu avec Mention'
            zh='DNA (National Diploma of Art) 以榮譽的成績畢業'
            language={language}/>
            </Label>
          }
        body={
          <Multi
            eng={<small>Bachelor's degree in Digital Art.</small>}
            fr={<small>Licence en Art Numérique.</small>}
            zh={<small>數位藝術学士</small>}
            language={language}/>
        }
        detail={
          <Multi
            eng={<>ENSAD (École Nationale Supérieure d’Art et de Design) <br />2016 - 2018 :: Nancy, France </>}
            fr={<>ENSAD (École Nationale Supérieure d’Art et de Design) <br />2016 - 2018 :: Nancy, France </>}
            zh={<>ENSAD (École Nationale Supérieure d’Art et de Design) <br />2016 至 2018 :: 南錫，法國</>}
            language={language}/>
        }
      />
    </>
);


export default Edu;