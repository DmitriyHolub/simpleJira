import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import {MatBadgeModule} from '@angular/material/badge';
import {MatTooltipModule} from '@angular/material/tooltip';
import { HeaderMenuAssignedToMeModule } from './header-button/popover/header-menu/header-menu-assigned-to-me/header-menu-assigned-to-me.module';
import { HeaderMenuBoardsModule } from './header-button/popover/header-menu/header-menu-boards/header-menu-boards.module';
import { HeaderMenuRecentModule } from './header-button/popover/header-menu/header-menu-recent/header-menu-recent.module';
import { BriefInfoModule } from 'src/components/shared/brief-info/brief-info.module';

@NgModule({
  exports: [
    HeaderComponent
  ],
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MatMenuModule,
    MatIconModule,
    MatTabsModule,
    MatBadgeModule,
    MatTooltipModule,
    HeaderMenuAssignedToMeModule,
    HeaderMenuBoardsModule,
    HeaderMenuRecentModule,
    BriefInfoModule
  ]
})
export class HeaderModule { }
