import { Ticket } from "./ticket";

export interface Column{
  id:number,
  name:string,
  tickets: Ticket[]
}
