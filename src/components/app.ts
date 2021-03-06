import {Component} from 'angular2/angular2';

@Component({
    selector: 'app',
    template: `
        <h1>Hello, {{name}}!</h1>
        Say hello to: <input [value]="name" (input)="name = $event.target.value">
    `
})
export class AppComponent {
    name: string = 'World';
}