import { pictureToFullPath } from '../../lib/utils';

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