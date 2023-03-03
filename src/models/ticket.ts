//TODO refatoring all strings to obcjects types
export interface Ticket{
  id: number;
  name:string,
  type: string,
  priority: string,
  code:string,
  assignee: string,
  dateCreated : Date,
  description: string
}
//not used now
export const enum TicketType {
  Bug = 'bug',
  Investigation = 'investigation',
}
