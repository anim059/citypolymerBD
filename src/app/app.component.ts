import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  
  title = 'City Polymer Bd';

  loader : boolean = false;

  ngOnInit(): void {    
    setTimeout(() => {
      this.loader = false;
    }, 2000);
  }

}
