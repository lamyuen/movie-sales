import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { capitalCase } from 'change-case';

import { Control } from '../control';

@Component({
  selector: 'mat-ui-form',
  templateUrl: './mat-ui-form.component.html',
  styleUrls: ['./mat-ui-form.component.css'],
})
export class MatUiFormComponent implements OnChanges {
  @Input() model: any = {};
  @Input() controls: Control[] = [];
  @Output() modelChange = new EventEmitter<any>();
  formGroup!: FormGroup;

  ngOnChanges(changes: SimpleChanges): void {
    for (const change in changes) {
      switch (change) {
        case 'model':
          break;
        case 'controls':
          this.setupFormGroup();
          break;
      }
    }
  }

  private setupFormGroup() {
    const _controls: { [name: string]: FormControl } = {};
    for (const control of this.controls) {
      const validators = [];
      if (control.required) {
        validators.push(Validators.required);
      }
      _controls[control.name] = new FormControl(
        this.model[control.name] ?? null,
        validators
      );
      if (control.label) {
        control.label = capitalCase(control.name);
      }
    }
  }
}
