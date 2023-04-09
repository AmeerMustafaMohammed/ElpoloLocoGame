
class CollectableObject extends MovableObject{
    constructor(){
        super();
    }

    removeObject(object,array){
        let thisClass = this
        array.splice(array.indexOf(object), 1);
    }

    collect(){
       
    }
}