import { Column } from "./column";

export interface Project{
  id: number,
  name:string,
  Columns: Column[]
}
