import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root',
})
export class DictionaryService {
  lastKey = -1;

  constructor(private storage: Storage, private httpClient: HttpClient) { 
  }

  add(key: string, value: string) {
    return this.storage.set(key, value);
  }

  getData() {
    return this.storage.keys().then(keys => {
      console.log(keys);
      let r = this.randomInteger(0, keys.length -1);
      while(r === this.lastKey && keys.length > 1) {
        console.log(1);
        r = this.randomInteger(0, keys.length -1);
      }
      this.lastKey = r;
      let key = keys[r];
      return this.storage.get(key).then(value => {
        return [key, value];
      });
    });
  } 

  remove(key: string) {
    return this.storage.remove(key);
  }

  loadDefault(){
    this.httpClient.get<any>("assets/Vocabulary.json").subscribe((res) => {
      Object.keys(res).forEach(key => {
        this.add(key, res[key]);
      });
    });
  }

  private randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
