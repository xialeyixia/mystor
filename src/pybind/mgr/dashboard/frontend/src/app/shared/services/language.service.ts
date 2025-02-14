import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, LOCALE_ID } from '@angular/core';

import { environment } from '~/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  constructor(private http: HttpClient, @Inject(LOCALE_ID) protected localeId: string) {}

  getLocale(): string {
    return this.localeId || environment.default_lang;
  }

  setLocale() {
    document.cookie = `cd-lang=zh-Hans`;
  }

  getLanguages() {
    return this.http.get<string[]>('ui-api/langs');
  }
}
