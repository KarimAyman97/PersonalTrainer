import { LanguageShareService } from './../services/languageShare.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
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
