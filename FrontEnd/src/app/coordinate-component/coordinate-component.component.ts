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
    let latitude = (document.getElementById("latitude") as HTMLInputElement).value;
    this.httpClient.post('http://localhost:3000/soil', {
      longitude : longitude, 
      latitude : latitude
  }).subscribe(resp => {
    console.log("response ", resp)
    let soilScore = document.getElementById("soilScore")
    if (soilScore){
      soilScore.innerHTML = JSON.stringify(resp)
    }
  })
  }

}
