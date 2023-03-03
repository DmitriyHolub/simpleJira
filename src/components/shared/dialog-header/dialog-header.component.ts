import {
  Component,
  Output,
  EventEmitter,
  Input
} from '@angular/core';
import { BaseComponent } from 'src/utils/base-component/base.component';

@Component({
  selector: 'app-dialog-header',
  templateUrl: './dialog-header.component.html',
  styleUrls: ['./dialog-header.component.scss']
})
export class DialogHeaderComponent
   extends BaseComponent {

  @Input() public svgIcon? : string = '';
  @Input() public title: string = '';
  @Input() public icon?: string = '';
  @Input() public subtitle?: string = '';

  @Output() public backClick = new EventEmitter<MouseEvent>();

}
