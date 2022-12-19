
import PROJECTS, { THEMES } from './projects';


export function cleanCategoryName(key){ return key.replace('<br>',''); }

export function getCategories(projects=PROJECTS){ return Object.keys(projects); }

export function getColorOfCategory(category){ return THEMES[category]; }

export function randomInt(mn, mx) { // min and max included
  mn = parseInt(mn);
  mx = parseInt(mx);
  return  Math.floor(Math.random() * (mx - mn + 1) + mn) ;
}

export function getProjectFromTitle(title){

  var project = null;

  getCategories(PROJECTS).map( category => {
      const filtered = PROJECTS[category].filter( project => project.title === title);
      if( filtered.length > 0 ){ project = filtered[0]; }
    }
  );

  return project;

}

export function getCategoryOfProject(project){
  var ctg = null;

  getCategories(PROJECTS).map( category => {
    const filtered = PROJECTS[category].filter( prj => prj.title === project.title );
    if(filtered.length > 0){ ctg = category; }
  });

  return ctg;

}

export function getColorFromProject(project){ return THEMES[ getCategoryOfProject(project) ]; }


export function getRandomProject({number, category, project}){

  number  = number || 3;
  if(PROJECTS[category]){

      let proj_ar = PROJECTS[category].filter( prj => prj.title !== project.title);
      proj_ar = proj_ar.sort( () => 0.5 - Math.random() );
      return proj_ar.slice(0, number);

  }else{
    console.log("couldn't find category: " +category );
    return [];
  }

  return [];
}

export function  getPageTitleFromLocation(location){

    const pathname = location.pathname;
    const routes  = [
      {string: "project/", title: (pth) => decodeURI(pth.split('/').pop()) },
      {string: "/about", title: (pth) => 'About'},
    ]

    const filtered = routes.filter( route =>  pathname.match(route.string) );

    if( filtered && filtered.length > 0){ return filtered[0].title(pathname) }

    return '';
}

export function scrollTo(offset, callback) {
    const fixedOffset = offset.toFixed();
    const onScroll = function () {
            if (window.pageYOffset.toFixed() === fixedOffset) {
                window.removeEventListener('scroll', onScroll)
                callback()
            }
        }

    window.addEventListener('scroll', onScroll)
    onScroll()
    window.scrollTo({
        top: offset,
        behavior: 'smooth'
    })
}


export function getSkinFromProject(project){ return project.skin || 'default'; }

export function getCustomColorFromProject(project){ return project.color || null; }

export function pictureToFullPath({folder, picture, extension='jpg'}){ return '/assets/projects'+folder+'/'+picture+'.'+extension; }

export function concatGalleries({galleries, galleryKey, selectedPicture}){

  //return a flatened version on the galleries, and the index of selected picture
  let index = 0;
  let indexFound = false;
  const pictures = [];

  for(const gl of galleries[galleryKey]){
      for(const pic of gl.pictures){
        pictures.push(pictureToFullPath({folder:gl.folder, picture:pic, extension:gl.extension}));

        if( pic === selectedPicture ){ indexFound = true; }
        else if(pic !== selectedPicture && !indexFound ){ index++; }
      }
  }

  return { index:index, pictures:pictures };
}

export function filenameFromPath(path){
  return path.split('/').reverse()[0].split('.')[0];
}

export function smoothScroll(offsetTop, offset = 0) {
  let targetPosition = Math.floor( offsetTop );
  window.scrollTo({
    top: targetPosition,
    behavior: 'smooth'
  });

  return new Promise((resolve, reject) => {
    const failed = setTimeout(() => {
      reject();
    }, 2000);

    const scrollHandler = () => {
      if (window.self.pageYOffset === targetPosition) {
        window.removeEventListener("scroll", scrollHandler);
        clearTimeout(failed);
        resolve();
      }
    };
    if (window.self.pageYOffset === targetPosition) {
      clearTimeout(failed);
      resolve();
    } else {
      window.addEventListener("scroll", scrollHandler);
    }
  });
}


export function isMobile(){ return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent); }

export function setFaviconColor(favicon, color='red'){ return favicon.href = process.env.PUBLIC_URL + '/favicon_'+color+'.ico' ; }

export function changeHashTo(hash){ return window.history.pushState(null, "The Art of Nassim El Khantour - "+hash, "/#"+hash); }