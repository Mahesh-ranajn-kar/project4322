import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { Task1Component } from './components/task1/task1.component';
import { Task2Component } from './components/task2/task2.component';
import { Task3Component } from './components/task3/task3.component'
import { FormsModule } from '@angular/forms';
import { TaskFourParentComponent } from './components/task4/task-four-parent/task-four-parent.component';
import { SquareComponent } from './components/task4/square/square.component';
import { FactorialComponent } from './components/task4/factorial/factorial.component';
import { TaskFiveParentComponent } from './components/task5/task-five-parent/task-five-parent.component';
import { NameComponent } from './components/task5/name/name.component';
import { AgeComponent } from './components/task5/age/age.component';
import { BlogComponent } from './components/task6/blog/blog.component';
import { CommentComponent } from './components/task6/comment/comment.component';
import { HideShowComponent } from './components/task7/hide-show/hide-show.component';
import { Type1Component } from './components/task7/type1/type1.component';
import { Type2Component } from './components/task7/type2/type2.component';
import { Type3Component } from './components/task7/type3/type3.component';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`
})
export class AppComponent {}

@NgModule({
  declarations: [
    AppComponent,
    Task1Component,
    Task2Component,
    Task3Component,
    TaskFourParentComponent,
    SquareComponent,
    FactorialComponent,
    TaskFiveParentComponent,
    NameComponent,
    AgeComponent,
    BlogComponent,
    CommentComponent,
    HideShowComponent,
    Type1Component,
    Type2Component,
    Type3Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
