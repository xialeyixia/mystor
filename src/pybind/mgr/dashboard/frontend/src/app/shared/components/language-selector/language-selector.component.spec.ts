import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { configureTestBed } from '~/testing/unit-test-helper';
import { LanguageSelectorComponent } from './language-selector.component';

describe('LanguageSelectorComponent', () => {
  let component: LanguageSelectorComponent;
  let fixture: ComponentFixture<LanguageSelectorComponent>;

  configureTestBed({
    declarations: [LanguageSelectorComponent],
    imports: [FormsModule, HttpClientTestingModule]
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguageSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    spyOn(component, 'reloadWindow').and.callFake(() => component.ngOnInit());
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should read current language', () => {
    expect(component.selectedLanguage).toBe('en-US');
  });

  const expectLanguageChange = () => {
    component.changeLanguage();
    const cookie = document.cookie.split(';').filter((item) => item.includes(`cd-lang=zh-Hans`));
    expect(cookie.length).toBe(1);
  };

  it('should change to cs', () => {
    expectLanguageChange();
  });

  it('should change to de', () => {
    expectLanguageChange();
  });

  it('should change to es', () => {
    expectLanguageChange();
  });

  it('should change to fr', () => {
    expectLanguageChange();
  });

  it('should change to id', () => {
    expectLanguageChange();
  });

  it('should change to it', () => {
    expectLanguageChange();
  });

  it('should change to ja', () => {
    expectLanguageChange();
  });

  it('should change to ko', () => {
    expectLanguageChange();
  });

  it('should change to pl', () => {
    expectLanguageChange();
  });

  it('should change to pt', () => {
    expectLanguageChange();
  });

  it('should change to zh-Hans', () => {
    expectLanguageChange();
  });

  it('should change to zh-Hant', () => {
    expectLanguageChange();
  });
});
