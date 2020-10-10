import { Component, OnInit } from '@angular/core';
import { DictionaryService } from '../dictionary.service';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.page.html',
  styleUrls: ['./practice.page.scss'],
})
export class PracticePage implements OnInit {
  key = '';
  value = '';
  showValue = false;
  reverse = false;
  constructor(public dictionaryService: DictionaryService) { }

  ngOnInit() {
    this.dictionaryService.getData().then(res => [this.key, this.value] = res)
  }

  next() {
    this.showValue = false;
    this.dictionaryService.getData().then(res => [this.key, this.value] = res)
  }
  
  remove(){
    this.dictionaryService.remove(this.key);
    this.next();
  }
}
