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

  addNotes(){
    var newNotes = (<HTMLInputElement> document.getElementById("newNotes")).value;
    var formData = new FormData();
    formData.append("newNotes", newNotes);
    this.http.post(this.APIUrl + 'AddNotes', formData).subscribe(data =>{
      alert(data);
      this.refreshNotes();
    })
  }
  deleteNotes(id:any){

    this.http.delete(this.APIUrl + 'DeleteNotes?id'+ id).subscribe(data =>{
      alert(data);
      this.refreshNotes();
    })
    
  }



}
