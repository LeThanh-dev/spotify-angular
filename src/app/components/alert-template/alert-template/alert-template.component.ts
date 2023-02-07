import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alert-template',
  templateUrl: './alert-template.component.html',
  styleUrls: ['./alert-template.component.scss']
})
export class AlertTemplateComponent {


  @Input() styleCustom:string = ""
  @Input() text:string = ""
}
