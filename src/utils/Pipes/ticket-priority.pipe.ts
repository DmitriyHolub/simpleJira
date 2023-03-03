import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ticketPriority',
})
export class TicketPriorityPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    switch (value) {
      case 'P1': {
        return 'P1 - Alarm';
      }
      case 'P2': {
        return 'P2 - Small alarm';
      }
      case 'P3': {
        return 'P3 - Normal';
      }
      default: {
        return 'Unknown';
      }
    }
  }
}
