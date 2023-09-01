
import CATEGORIES from './projects';


export function cleanCategoryName(key){ return key.replace('<br>',''); }

export function getCategories(cat=CATEGORIES){ return Object.keys(cat); }

export function randomInt(mn, mx) { // min and max included
  mn = parseInt(mn);
  mx = parseInt(mx);
  return  Math.floor(Math.random() * (mx - mn + 1) + mn) ;
}

export function getProjectFromTitle(title){

  var project = null;

  getCategories().map( category => {
      const filtered = CATEGORIES[category].projects.filter( project => project.title === title);
      if( filtered.length > 0 ){ project = filtered[0]; }
    }
  );

  return project;

}

export function getCategoryOfProject(project){
  var ctg = null;

  getCategories().map( category => {
    const filtered = CATEGORIES[category].projects.filter( prj => prj.title === project.title );
    if(filtered.length > 0){ ctg = category; }
  });

  return ctg;

}

export function getRandomProject({number, project}){

  number  = number || 3;
  const category = getCategoryOfProject(project);
  
  if(CATEGORIES[category]){
      let proj_ar = CATEGORIES[category].projects.filter( prj => prj.title !== project.title);
      proj_ar = proj_ar.sort( () => 0.5 - Math.random() );
      return proj_ar.slice(0, number);
  }else{
    console.log("couldn't find category: " +category );
    return [];
  }

  return [];
}

export function getProjectsOfCategory(cat){ return CATEGORIES[cat].projects || []; }

export function getPageTitleFromLocation(location){

    const pathname = location.pathname;
    const routes  = [
      {string: "project/", title: (pth) => decodeURI(pth.split('/').pop()) },
      {string: "/about", title: (pth) => 'About'},
    ]

    const filtered = routes.filter( route =>  pathname.match(route.string) );
    if( filtered && filtered.length > 0){ return filtered[0].title(pathname) }

    return '';
}

export function getZhongwenOfCategory(category){ return CATEGORIES[category]?.zhongwen }

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

export function pictureToFullPath({folder, picture, extension='webp'}){ return '/assets/projects'+folder+'/'+picture+'.'+extension; }


export function filenameFromPath(path){
  return path.split('/').reverse()[0].split('.')[0];
}

export function getAllProjects(){
  return Object.keys(CATEGORIES).map( cat => CATEGORIES[cat].projects ).flat();
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

export function changeHashTo(hash){ 

  if(!hash || !hash.length || !hash.trim().length ){
    return window.history.pushState(null, "The Art of Nassim El Khantour","/");
  }else{
    return window.history.pushState(null, "The Art of Nassim El Khantour - "+hash, "/#"+hash);
  }

}