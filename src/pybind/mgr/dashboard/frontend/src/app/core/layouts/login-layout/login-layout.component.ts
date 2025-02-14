import { Component } from '@angular/core';
@Component({
  selector: 'cd-login-layout',
  templateUrl: './login-layout.component.html',
  styleUrls: ['./login-layout.component.scss']
})
export class LoginLayoutComponent {
  docItems: any[] = [
    { section: '', text: '高可用' },
    { section: '', text: '高可靠' },
    { section: '', text: '高性能' }
  ];
}
