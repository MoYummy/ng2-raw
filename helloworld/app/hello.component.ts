import {Component} from 'angular2/core';

@Component({
    selector: 'hello',
    templateUrl: './app/hello.component.html',
    styleUrls: ['./app/hello.component.css']
})
export class HelloComponent {
    name: string = 'ng2';
}
