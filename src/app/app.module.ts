import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';

import { FormsModule } from '@angular/forms';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PlayersComponent } from './players/players.component';
import { GameCreationComponent } from './game-creation/game-creation.component';
import { DecodeGameComponent } from './decode-game/decode-game.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; //<-- NgModule lives here
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatChipsModule } from '@angular/material/chips';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatExpansionModule } from '@angular/material/expansion';
import { DndRecapComponent } from './dnd-recap/dnd-recap.component';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { OverlayModule } from '@angular/cdk/overlay';
import { EnemyTooltipComponent } from './enemy-tooltip/enemy-tooltip.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserDetailComponent,
    MessagesComponent,
    DashboardComponent,
    PlayersComponent,
    GameCreationComponent,
    DecodeGameComponent,
    DndRecapComponent,
    EnemyTooltipComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatRadioModule,
    MatInputModule,
    MatFormFieldModule,
    MatTabsModule,
    MatButtonModule,
    MatToolbarModule,
    MatChipsModule,
    MatListModule,
    MatIconModule,
    ClipboardModule,
    MatExpansionModule,
    MatCardModule,
    MatSidenavModule,
    OverlayModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
