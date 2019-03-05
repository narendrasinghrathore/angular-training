import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { UserComponent } from './container/user/user.component';
import { UserListComponent } from './container/user-list/user-list.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';

const routes: Routes = [
    {
        path: '', component: UserComponent,
        children: [
            // { path: '', redirectTo: 'users/list', pathMatch: 'full' },
            { path: 'list', component: UserListComponent, pathMatch: 'full' },
            { path: 'detail/:id', component: UserDetailComponent, pathMatch: 'full' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule { }
