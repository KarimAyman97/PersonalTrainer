import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LanguageShareService {
  private languageSource = new BehaviorSubject<string>('English');
  current_Language = this.languageSource.asObservable();
  constructor() {}

  changeLanguage(lang: string) {
    this.languageSource.next(lang);
  }
}
