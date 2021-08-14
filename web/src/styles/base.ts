//  I don't want to extend class but it is typescript. Forgive me for not using constructor function
interface IFont {
    fontSize:string;
    fontFamily:string;
    fontWeight:string;
}

export class Font implements IFont{
    public fontSize:string
    public fontFamily:string
    public fontWeight:string
}

export class H1 extends Font {

}

export class H2 extends Font {

}

//  const h1 = {
    //  fontSize:
//  }

//  const h2 = {
    //  fontSize:
//  }


//  const h3 = {
    //  fontSize:
//  }
