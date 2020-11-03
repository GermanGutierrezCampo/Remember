import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DictionaryService } from '../dictionary.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router, public dictionaryService: DictionaryService) {}

  onEnterData(){
    this.router.navigate(['/enter-data']);
  }

  onLoadDefault(){
    this.dictionaryService.loadDefault();
  }

  onPractice(){
    this.router.navigate(['/practice']);    
  }

}
