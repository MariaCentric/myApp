import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myApp';
  readonly APIUrl ="https://localhost:7112/api/Wish/";
  
  constructor(private http:HttpClient){
  }
  notes:any =[];

  refreshNotes(){
    this.http.get(this.APIUrl+'GetNotes').subscribe(data =>{
      this.notes = data;
    })
  }

  ngOnInit(){
    this.refreshNotes();
  }
}
