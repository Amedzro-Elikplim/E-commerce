import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.css'],
})
export class FormFieldComponent {
  @Input() placeholder: string | undefined;
  @Input() type: string | undefined;
  @Input() label: string | undefined;
  @Input() icon: string | undefined;
  @Input() hint: string | undefined;
}
