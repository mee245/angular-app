export class Recipe{
    public name: string;
    public description: string;
    // public imagePath: string;

    constructor(name: string, desc: string){
        this.name = name;
        // this.imagePath = imagePath;
        this.description = desc;
    }
}