import { Category } from './category.interface';
import { Breed } from './breed.interface';

export interface Image {
  id: string;
  url: string;
  categories: Category[];
  breeds: Breed[];
  height: number;
  width: number;
}
