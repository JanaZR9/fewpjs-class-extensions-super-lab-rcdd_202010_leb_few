// Write your classes here

class Tree{
  constructor(species){
    this.species=species;
  }
  
  static definition(){
    return 
  }
}

class Deciduous extends Tree {
  constructor(species,name){
    super(species);
    this.name=name;
  }
  
  static definition(){
    return ${super.definition()} + `Deciduous trees shed their leaves annually.` 
  }
}
