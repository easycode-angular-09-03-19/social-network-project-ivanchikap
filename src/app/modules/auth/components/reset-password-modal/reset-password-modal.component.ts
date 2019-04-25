import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../../services/auth.service";
import { DefaultServerAnswer } from "../../../../common/interfaces/DefaultServerAnswer";

@Component({
  selector: 'app-reset-password-modal',
  templateUrl: './reset-password-modal.component.html',
  styleUrls: ['./reset-password-modal.component.css']
})
export class ResetPasswordModalComponent implements OnInit {
  @Output('modalClose') modalCloseEvent = new EventEmitter();
  resetPasswordForm: FormGroup;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.resetPasswordForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  closeModal() {
    this.modalCloseEvent.emit();
  }

  onSubmit() {
    this.authService.resetPassword(this.resetPasswordForm.value).subscribe((res: DefaultServerAnswer) => {
      if (!res.error) {
        this.closeModal();
      }
    });
  }
}
