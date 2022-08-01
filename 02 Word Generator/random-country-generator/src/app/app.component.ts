import { Component } from '@angular/core';
import countries from 'src/utils/countries';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'random-country-generator';

  randomCountries: string[] = [];

  randomNumber = 0;

  generateRandomNumber(){
    this.randomNumber = Math.floor(Math.random() * (countries.length) + 1);

    this.selectRandomCountries();
  }

  selectRandomCountries(){
    this.randomCountries = [];

    while(this.randomCountries.length != this.randomNumber && this.randomCountries.length < this.randomNumber){
      
      var randomIndex = Math.floor(Math.random() * countries.length);

      if (!this.randomCountries.includes(countries[randomIndex])){
        this.randomCountries.push(countries[randomIndex]);
      }

    }
  }
}
