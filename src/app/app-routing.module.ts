import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Part1Component } from './part1/part1.component';
import { ShellComponent } from './container/shell/shell.component';
import { AboutComponent } from './container/about/about.component';
import { Page404Component } from './container/page404/page404.component';

const routes: Routes = [
  {
    path: '', component: ShellComponent,
    children: [
      { path: '', redirectTo: 'part1', pathMatch: 'full' },
      { path: 'part1', component: Part1Component, pathMatch: 'full' },
      { path: 'about', component: AboutComponent },
    ]
  },
  { path: 'users', loadChildren: './users/user.module#UserModule' },
  { path: '**', component: Page404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
