import { Component, OnInit } from '@angular/core';
import { LanguageShareService } from '../services/languageShare.service';

@Component({
  selector: 'app-upper-header',
  templateUrl: './upper-header.component.html',
  styleUrls: ['./upper-header.component.scss'],
})
export class UpperHeaderComponent implements OnInit {
  language: string = 'English';

  constructor(private LangChangeService: LanguageShareService) {}

  ngOnInit() {
    this.LangChangeService.current_Language.subscribe(
      (lang) => (this.language = lang)
    );
  }

  changeLanguage() {
    if (this.language === 'English') {
      this.LangChangeService.changeLanguage('العـــربية');
    } else {
      this.LangChangeService.changeLanguage('English');
    }
  }
}
