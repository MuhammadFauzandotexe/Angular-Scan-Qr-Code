import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'coba-kamera';
  scanResult:any = '';
  onCodeResult(result:string){
    this.scanResult = result;
    console.log(result);
  }
}
