class DrawableOject {
    x;
    y;
    height;
    width;
    img = new Image();
    imageCache = [];
    currentImage = 0;



    loadImage(path) {
        this.img.src = path;
    }

     //Save all imagespath as an Imageobject in newJson and add newJson to ImageCache
     loadImages(arr) {
        arr.forEach((path)=>{
            let img = new Image()
            img.src = path
            this.imageCache[path]= img;
        })
    
    }
}