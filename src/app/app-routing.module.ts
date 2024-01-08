import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { GameCreationComponent } from './game-creation/game-creation.component';
import { PlayersComponent } from './players/players.component';
import { DecodeGameComponent } from './decode-game/decode-game.component';
import { DndRecapComponent } from './dnd-recap/dnd-recap.component';

const routes: Routes = [
  { path: 'game_creation', component: GameCreationComponent },
  { path: 'decode_game', component: DecodeGameComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'players', component: PlayersComponent},
  { path: 'detail/:id', component: UserDetailComponent},
  { path: '**', redirectTo: '/game_creation', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
