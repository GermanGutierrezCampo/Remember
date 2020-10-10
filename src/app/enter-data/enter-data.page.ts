import { Component, OnInit } from '@angular/core';
import { DictionaryService } from '../dictionary.service';

@Component({
  selector: 'app-enter-data',
  templateUrl: './enter-data.page.html',
  styleUrls: ['./enter-data.page.scss'],
})
export class EnterDataPage implements OnInit {
  key = '';
  value = '';

  constructor(public dictionaryService: DictionaryService) { }

  ngOnInit() {
  }

  add(){
    this.dictionaryService.add(this.key, this.value);
    this.key = '';
    this.value = '';
  }

}
