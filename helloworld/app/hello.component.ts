import {Component} from 'angular2/core';

@Component({
    selector: 'hello',
    templateUrl: './hello.component.html'
})
export class HelloComponent {
    name: string = 'Angular2';
}
