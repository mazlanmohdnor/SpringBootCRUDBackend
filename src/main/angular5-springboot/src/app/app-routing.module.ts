import { EditTopicComponent } from './topic/edit-topic/edit-topic.component';
import { HomeComponent } from './home/home.component';
import { TopicComponentComponent } from './topic/topic-component/topic-component.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path: "",
    component: TopicComponentComponent
  },
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "edit/topics/:id",
    component: EditTopicComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
