export class TechniqueDTO {
  name: string;
  image: string;
  type: string;
  belt: Belt;
  marked!: boolean;

  constructor(name: string, image: string, type: string, belt: Belt) {
    this.name = name;
    this.image = image;
    this.type = type;
    this.belt = belt;
    this.marked = false;
  }
}

export enum Belt {
  white,
  yellow,
  orange,
  green,
  blue,
  red,
  black,
  superior,
}
