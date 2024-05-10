import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FeedComponent } from './feed/feed.component';
import { DetectComponent } from './detect/detect.component'
import { AuthGuard } from './helpers/auth.guard';
import { MarketComponent } from './market/market.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'market', component: MarketComponent, canActivate: [AuthGuard]  },
  { path: 'feed', component: FeedComponent, canActivate: [AuthGuard] },
  { path: 'detect', component: DetectComponent, canActivate: [AuthGuard]},
  { path: '**', redirectTo: 'feed' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
