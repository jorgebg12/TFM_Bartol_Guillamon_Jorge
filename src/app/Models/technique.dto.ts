export class TechniqueDTO {
  id: number;
  name: string;
  image: string;
  type: string;
  belt: Belt;
  marked!: boolean;

  constructor(
    id: number,
    name: string,
    image: string,
    type: string,
    belt: Belt
  ) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.type = type;
    this.belt = belt;
    this.marked = false;
  }
}

export enum Belt {
  white = 'white',
  yellow = 'yellow',
  orange = 'orange',
  green = 'green',
  blue = 'blue',
  red = 'red',
  black = 'black',
  superior = 'superior',
}
