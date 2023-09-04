
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
    return "/";
    //return window.history.pushState(null, "The Art of Nassim El Khantour","/");
  }else{
    return "/#"+hash;
    //return window.history.pushState(null, "The Art of Nassim El Khantour - "+hash, "/#"+hash);
  }

}

export function os(){
  return navigator.userAgent.toUpperCase().indexOf('MAC') != -1 ? "MAC" : "WIN";
}

export function lerp (start, end, amt){
  return (1-amt)*start+amt*end
}

export function device() {
  let device = "desktop";
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) device = "mobile";})(navigator.userAgent||navigator.vendor||window.opera);
  return device;
};