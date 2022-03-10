import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Task1Component } from './components/task1/task1.component';
import { Task2Component } from './components/task2/task2.component';
import { Task3Component } from './components/task3/task3.component';
import { TaskFourParentComponent } from './components/task4/task-four-parent/task-four-parent.component';
import { TaskFiveParentComponent } from './components/task5/task-five-parent/task-five-parent.component';
import { BlogComponent } from './components/task6/blog/blog.component';
import { HideShowComponent } from './components/task7/hide-show/hide-show.component';
import { Type1Component } from './components/task7/type1/type1.component';
import { Type2Component } from './components/task7/type2/type2.component';
import { Type3Component } from './components/task7/type3/type3.component';

const routes: Routes = [
  {
    path: 'task-1',
    component: Task1Component
  },
  {
    path: 'task-2',
    component: Task2Component
  },
  {
    path: 'task-3',
    component: Task3Component
  },
  {
    path: 'task-4',
    component: TaskFourParentComponent
  },
  {
    path: 'task-5',
    component: TaskFiveParentComponent
  },
  {
    path: 'task-6',
    component: BlogComponent
  },
  {
    path: 'task-7',
    component: HideShowComponent,
    children: [
      {
        path: 'type1',
        component: Type1Component
      },
      {
        path: 'type2',
        component: Type2Component
      },
      {
        path: 'type3',
        component: Type3Component
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
