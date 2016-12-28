import {Component} from 'angular2/core';

@Component({
    selector: 'hello',
    template: `
        <h1>Hello, {{name}}!</h1>
        Say hello to: <input [value]="name" (input)="name = $event.target.value">
    `
})
export class HelloComponent {
    name: string = 'World';
}
