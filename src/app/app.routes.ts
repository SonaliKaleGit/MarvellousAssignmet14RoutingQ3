import { Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { TechnologiesComponent } from './technologies/technologies.component';

import { InvalidPageComponent } from './invalid-page/invalid-page.component';

export const routes: Routes = [

     //Specific Route
     {path:'booklist',component:BooksComponent},
     {path:'techlist',component:TechnologiesComponent},
 
     //Default Route
     {path:'',component:TechnologiesComponent},
     
     //wildcard route /invalid route
     {path:'**',component:InvalidPageComponent},
];
