import dynamic from 'next/dynamic';

export default {

  "Design":{
    "zhongwen":"设计",
    "color":"red",
    "projects":
    [
      {
        "title":"XTRA",
        "thumbnail":"/assets/thumbnails/xtra/xtra.webp",
        "banner":"/assets/banners/xtra.webp",
        "overlay":{
          "type":"slideshow",
          "url":[
            "/assets/thumbnails/xtra/xtra_1.webp",
            "/assets/thumbnails/xtra/xtra_2.webp",
            "/assets/thumbnails/xtra/xtra_3.webp"
          ],
        },
        "date": 2023,
        "desc":"Case study of a website for a data privacy and compliance solution company",
        "longdesc":"XTRA is a cybersecurity firm providing various services going from cybersecurity analysis to network setup. All these services are gathered within a visually impactful and modernistic website.",
        "category":["Web Design", "UX/UI", "Branding"],
        "stack":["Photoshop","Illustrator","Figma"],
        "folder":"xtra"
      },
      {
        "title":"Kinoji",
        "thumbnail":"/assets/thumbnails/kinoji/kinoji_1.webp",
        "banner":"/assets/banners/kinoji.webp",
        "overlay":{
          "type":"slideshow",
          "url":[
            "/assets/thumbnails/kinoji/kinoji_2.webp",
            "/assets/thumbnails/kinoji/kinoji_4.webp",
            "/assets/thumbnails/kinoji/kinoji_3.webp"
          ],
        },
        "desc":"Case study of an online cinematography library using MERN stack",
        "longdesc":"Kinoji is a search engine gathering thousands of shots from hundreds of movies from East-Asia. The website provides various tools to help the user find the perfects shots for his next project.",
        "category":["Web Design","UX/UI","App development"],
        "stack":["NodeJS","React","HTML","SCSS","JSX"],
        "date":2021,
        "folder":"kinoji",
        "skin":"dark"
      },
      {
        "title":"ACID DESIGN",
        "thumbnail":"/assets/thumbnails/aciddesign/comet.webp",
        "overlay":{
          "type":"slideshow",
          "url":[
            "/assets/thumbnails/aciddesign/acid_1.webp",
            "/assets/thumbnails/aciddesign/acid_2.webp",
            "/assets/thumbnails/aciddesign/acid_3.webp",
            "/assets/thumbnails/aciddesign/comet.webp"
          ],
        },
        "banner":"/assets/banners/aciddesign.webp",
        "desc":"Showcase of product design, branding and UI concepts inspired by Science-Fiction",
        "longdesc":"A series of exercises with different approaches and goals, exploring a multitude branding, packaging and UX/UI ideas inspired by Science-Fiction.",
        "category":["Product Design", "UX/UI", "Branding"],
        "stack":["Photoshop","Illustrator","Blender"],
        "date":2021,
        "folder":"aciddesign"
      },
      {
        "title":"LAOS",
        "thumbnail":"/assets/thumbnails/laos/laos_1.webp",
        "overlay":{
          "type":"slideshow",
          "url":[
            "/assets/thumbnails/laos/laos_2.webp",
            "/assets/thumbnails/laos/laos_3.webp",
            "/assets/thumbnails/laos/laos.webp",
            "/assets/thumbnails/laos/laos_1.webp"
          ],
        },
        "banner":"/assets/banners/laos.webp",
        "desc":"Case study of a web extension helping to learn mandarin",
        "longdesc":"LAOS is a web browser extension helping to learn mandarin. The app provides many tools as well as exercises to make the learning journey as smooth as possible for its users.",
        "category":["Web Design","UX/UI","App development"],
        "stack":["HTML","SCSS","JS"],
        "date":2021,
        "folder":"laos",
      },
      {
        "title":"夢風",
        "thumbnail":"/assets/thumbnails/mengfeng.webp",
        "overlay":{
          "type":"video",
          "url":"/assets/thumbnails/mengfeng.webm"
        },
        "banner":"/assets/banners/mengfeng.webp",
        "desc":"Case study of a personal project covering the different steps of product design.",
        "longdesc":"夢風 is a connected oil diffuser and audio speaker. The pod (or diffuser) is linked to a mobile app in which the user can program various routines, listen to relaxing playlist, and take part yoga exercises.",
        "category":["Product Design", "UX/UI", "Branding"],
        "stack":["Photoshop","Illustrator","Blender","After Effects"],
        "date":2021,
        "folder":"mengfeng",
      },
      {
        "title":"商品設計合集",
        "thumbnail":"/assets/thumbnails/shangpin.webp",
        "banner":"/assets/banners/shangpin.webp",
        "overlay":{
          "type":"video",
          "url":"/assets/thumbnails/shangpin.webm"
        },
        "date": 2023,
        "desc":"Showcase of Taiwanese inspired products design",
        "longdesc":"A collection of various product design exploring various kinds of art directions and branding as well as field of productions, going from cosmetic, to food and technology.",
        "category":["Product Design", "UX/UI", "Branding"],
        "stack":["Photoshop","Illustrator","Blender","After Effects"],
        "folder":"shangpin"
    }
    ]
  }
    ,

  "Animations":{
    "zhongwen":"动画",
    "color":"blue",
    "projects":[
      {
        "title":"ACAB",
        "thumbnail":"/assets/thumbnails/acab.webp",
        "banner":"/assets/banners/acab.webp",
        "desc":"Awarded music video made for Philip Pentacle",
        "longdesc":"For his 4th album, I had the honor to create the music video for the Synthwave music producer Philip Pentacle. Depicting a futuristic world where uncanny phenomenon seems to inhabit the soul of the sprawl. The music video for the first price at Vibrations Urbaines Festival in 2022.",
        "category":["Animation","Art Direction","Music Video"],
        "stack":["Photoshop","Illustrator","Blender","Maya","After Effects"],
        "overlay":{
          "type":"video",
          "url":"/assets/thumbnails/acab.webm"
        },
        "date":2021,
        "folder":"acab",
        "skin":"dark"
      },
      {
        "title":"Kaiser Throne",
        "thumbnail":"/assets/thumbnails/kaiser.webp",
        "banner":"/assets/banners/kaiserthrone.webp",
        "desc": "Music video made for Epic Schmetterling music-band",
        "longdesc":"Music video made for Epic Schmetterling electro-punk music band. Drawing its inspiration from fleshy worlds of directors like Carpenter or Cronenberg but also by the techno-mysticism of Ōtomo, the project explores the relation between the technological matter, the organic and the spiritual in an animistic feast.",
        "category":["Animation","Art Direction","Music Video"],
        "stack":["Photoshop","Illustrator","Blender","Maya","After Effects"],
        "overlay":{
          "type":"video",
          "url":"/assets/thumbnails/kaiser.webm"
        },
        "date":2019,
        "folder":"kaiserthrone",
        "skin":"dark"
      },
      {
        "title":"NEOM",
        "thumbnail":"/assets/thumbnails/neom.webp",
        "banner":"/assets/banners/neom.webp",
        "desc":"Collaborative project with Philip Pentacle & Epic Schmetterling",
        "longdesc":"Mainly used as visuals for music performance, NEOM is a project of more than 100 cinematic CG samples of various subjects. Due to its performative nature, the project also has a dedicated VJ software developed with Python and TouchDesigner, allowing to fully express its potential through a diptych projection.",
        "category":["Animation","Art Direction","Events"],
        "stack":["Photoshop","Illustrator","Blender","Maya","After Effects"],
        "overlay":{
          "type":"video",
          "url":"/assets/thumbnails/neom.webm"
        },
        "date":"2019-2020",
        "folder":"neom",
        "skin":"dark"
      },
      {
        "title":"Aftermath",
        "thumbnail":"/assets/thumbnails/aft.webp",
        "banner":"/assets/banners/aftermath.webp",
        "desc":"Post-apocalyptic animation series",
        "longdesc":"An animation series exploring the spatial narration of an environment without any particular subject in it. An approach where the environment becomes the subjets itself, conveying its own story.",
        "category":["Animation","Cinematography","Fine Art"],
        "stack":["Photoshop","Illustrator","Blender","Maya","After Effects"],
        "overlay":{
          "type":"video",
          "url":"/assets/thumbnails/aftermath.webm"
        },
        "date":2018,
        "folder":"aftermath",
        "skin":"dark"
      }
    ]
  },

  "Illustrations":{
    "zhongwen":"插图",
    "color":"purple",
    "projects":[
      {
        "title":"The Lone harvester",
        "thumbnail":"/assets/thumbnails/harvester.webp",
        "banner":"/assets/banners/loneharvester.webp",
        "desc":"Environment concept art study",
        "longdesc":"\"Lost in the desert, it remained a mystery for all the wandering nomads how the Lone Harvester managed to nurture his soil.\" This project is a concept art exercise attempting to build a world around a light narrative context.",
        "category":["Digital Painting", "3D Production","Concept Art"],
        "stack":["Photoshop","Blender"],
        "overlay":{
          "type":"picture",
          "url":"/assets/thumbnails/harvester_overlay.webp"
        },
        "date":2020,
        "folder":"harvester"
      },
      {
        "title":"AZUSA",
        "thumbnail":"/assets/thumbnails/aero.webp",
        "banner":"/assets/banners/azusa.webp",
        "overlay":{
          "type":"picture",
          "url":"/assets/thumbnails/aero_overlay.webp"
        },
        "desc":"Collection of various Science-Fiction inspired illustrations",
        "longdesc":"AZUSA is a world building project taking its root in plenty of Science-Fiction concepts, from the beginning of the genre, up to today's trends.",
        "category":["Digital Painting", "3D Production","Concept Art", "World Building"],
        "stack":["Photoshop","Blender"],
        "date":2020,
        "folder":"azusa"
      },
      {
        "title":"Stylized Scenery",
        "thumbnail":"/assets/thumbnails/ozu.webp",
        "banner":"/assets/banners/stylized.webp",
        "overlay":{
          "type":"picture",
          "url":"/assets/thumbnails/ozu_overlay.webp"
        },
        "desc":"Various scenes with an expressionistic approach",
        "longdesc":"Collections of various sceneries where I challenged myself to step back from the realistic approach I was used to, to rejoin with a more stylized depictions of environnments",
        "category":["Digital Painting", "Concept Art"],
        "date":2021,
        "folder":"stylized"
      },
      {
        "title":"ECHO",
        "thumbnail":"/assets/thumbnails/echo.webp",
        "banner":"/assets/banners/echo.webp",
        "overlay":{
          "type":"picture",
          "url":"/assets/thumbnails/echo_overlay.webp"
        },
        "desc":"Experimenting with art directions and textures around the same avatar",
        "longdesc":"Expanded from the world building project AZUSA, this series tries to gives a humanoid depiction of \"ECHOes\": AZUSA's higher forces and deities.",
        "category":["Art Direction", "3D Production"],
        "date":2020,
        "folder":"echo"
      },
      {
        "title":"CYB3R T3CHN0 R4VE",
        "thumbnail":"/assets/thumbnails/cyber/cyber.webp",
        "overlay":{
          "type":"video",
          "url":"/assets/thumbnails/cyber/cyber.webm"
        },
        "banner":"/assets/banners/cyberrave.webp",
        "desc":"Enter the Cyber Rave",
        "longdesc":"The CYB3R R4VE (cyber rave) uses the rave culture as a lens to explore the questions of gender and identity within the cyberspace and the avatar inhabiting it.",
        "category":["Animation", "Fine Art", "Art Direction"],
        "date":2021,
        "folder":"cyberrave"
      }
    ]
  },

  "Creative Code":{
    "zhongwen":"创意编码",
    "color":"orange",
    "projects":[
      {
        "title":"UrbEXE",
        "thumbnail":"/assets/thumbnails/urbexe.webp",
        "desc":"Procedural game engine, made with Unity",
        "longdesc":"Developed in Unity, UrbEXE is a procedural environment evolving as the user wander through it. It uses MIDI controls to modulate the environment.",
        "category":["Creative Coding", "Interactive", "Events", "VJ"],
        "overlay":{
          "type":"video",
          "url":"/assets/thumbnails/urbexe.webm"
        },
        "banner":"/assets/banners/urbexe.webp",
        "date":2020,
        "folder":"urbexe"
      },
      {
        "title":"NTK",
        "thumbnail":"/assets/thumbnails/ntk.webp",
        "desc": "Selection of loops and samples made for soundsystems and other associations ",
        "longdesc":"Collection of visuals generated from procedural software. Those were audio-interactive animations projected during events.",
        "category":["Creative Coding", "VJ", "Events", "Motion Design"],
        "overlay":{
          "type":"video",
          "url":"/assets/thumbnails/ntk/ntk.webm"
        },
        "banner":"/assets/banners/ntk.webp",
        "date":"2016-2019",
        "folder":"ntk"
      },
      {
        "title":"Various Work",
        "thumbnail":"/assets/thumbnails/variousvj.webp",
        "overlay":{
          "type":"video",
          "url":"/assets/thumbnails/various/various.webm"
        },
        "banner":"/assets/banners/variouswork.webp",
        "desc":"Collection of older loops",
        "longdesc":"Animations designed to be projected during cultural events such as music acts, or broader experimental performances",
        "category":["Creative Coding", "VJ", "Events", "Motion Design"],
        "date":"2015-2017",
        "folder":"variouswork"
      }
  
    ]
  }

};

export const STATIC_IMPORTS = {
  //design
  "XTRA": dynamic(() => import('@/projects/xtra')),
  "Kinoji": dynamic(() => import('@/projects/kinoji')),
  "ACID DESIGN":  dynamic(() => import('@/projects/aciddesign')),
  "LAOS": dynamic(() => import('@/projects/laos')),
  "夢風": dynamic(() => import('@/projects/mengfeng')),
  "商品設計合集":  dynamic(() => import('@/projects/shangpin')),
  //animation
  "ACAB": dynamic(() => import('@/projects/acab')),
  "Kaiser Throne": dynamic(() => import('@/projects/kaiserthrone')),
  "NEOM":  dynamic(() => import('@/projects/neom')),
  "Aftermath":  dynamic(() => import('@/projects/aftermath')),
  //illustration
  "The Lone harvester": dynamic(() => import('@/projects/harvester')),
  "AZUSA": dynamic(() => import('@/projects/azusa')),
  "Stylized Scenery":  dynamic(() => import('@/projects/stylized')),
  "ECHO":  dynamic(() => import('@/projects/echo')),
  "CYB3R T3CHN0 R4VE":  dynamic(() => import('@/projects/cyberrave')),
  //creative code
  "UrbEXE":  dynamic(() => import('@/projects/urbexe')),
  "NTK":  dynamic(() => import('@/projects/ntk')),
  "Various Work":  dynamic(() => import('@/projects/variouswork'))

}



/*

//Illustrations

export const THEMES =
{
  'initial':'red',
  'Design':'red',
  'Animations':'blue',
  'Illustrations':'purple',
  'Creative Code':'yellow'
};
{
  "title":"兔儿神",
  "thumbnail":"/assets/thumbnails/rabbit.webp",
  "desc":"Art direction inspired by the short movie 兔兒神 ( <i> Kiss of the rabbit god </i> ) ",
  "date":2020,
  "folder":"rabbitgod",
  "font":"chuhuo"
},

     {
        "title":"感官新青春",
        "thumbnail":"/assets/thumbnails/sensu.webp",
        "banner":"/assets/banners/edos.webp",
        "overlay":{
          "type":"picture",
          "url":"/assets/thumbnails/sensu_overlay.webp"
        },
        "desc":"Collection of model paintings (explicit content)",
        "longdesc":"The project revolves around the study of human body and anatomy through an erotic lens by taking inspiration from candid amateurish pictures and extract their subjects from their initial environment.",
        "category":["Digital Painting", "Fine Art"],
        "date":2020,
        "folder":"sensu",
      },

//Creative Code
{
  "title":"Creative Coding",
  "thumbnail":"/assets/thumbnails/cc.webp",
  "desc":"Compilation of experimental work using Processing or Praxis",
  "longdesc":"",
  "category":["Creative Coding", "Procedural", "Fine Art"],
  "overlay":{
    "type":"video",
    "url":"717071918"
  },
  "banner":"A collection of experimentations relying on procedural algorithms to produce interactive visuals",
  "date":"2016",
  "folder":"creativecode"
},

    {
      "title":"Website mockups",
      "thumbnail":"/assets/thumbnails/soma_1.webp",
      "banner":"/assets/banners/websitemockup.webp",
      "desc":"Collection of mockup websites",
      "longdesc":"Exploring different kinds of interaction and visual dialects depending on the website's main functionalities and the market's culture it is anchored in (luxurious e-commerce, gaming plateform...)",
      "category":["Web Design", "UX/UI", "Branding",],
      "date":2021,
      "folder":"webcollection"
    },
*/
