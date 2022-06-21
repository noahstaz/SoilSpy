import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'coordinate-component',
  templateUrl: './coordinate-component.component.html',
  styleUrls: ['./coordinate-component.component.css']
})
export class CoordinateComponentComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit(){
    let longitude = (document.getElementById("longitude") as HTMLInputElement).value;
    let latitude = (document.getElementById("longitude") as HTMLInputElement).value;
    console.log(longitude)
    console.log(latitude)
    this.httpClient.get('http://localhost:3000/soil', {
      params: new HttpParams({
        
    })
  }).subscribe(resp => {
    console.log(resp);
  })
  }

}
