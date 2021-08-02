import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.scss']
})
export class TestingComponent implements OnInit {

  testeo: number = 3;

  hola: number;

  hoa: number = 9;

  ui: boolean;

  constructor() {
  }

  ngOnInit(): void {
    console.log('hola');
  }

  helloWorld(flag: boolean): string {
    window.alert('hola');
    const hola = 23;
    if (flag === true) {
      console.log(hola);
      console.log(2);
    } else {
      console.log(3);
    }
    return 'hola mundo';
  }

  async foo(): Promise<void> {
    await this.helloWorld(true);
}

}
