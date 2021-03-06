import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Submission } from '@cpas/api-interface';

@Component({
  selector: 'cpas-submissions-details',
  templateUrl: './submissions-details.component.html',
  styleUrls: ['./submissions-details.component.scss'],
})
export class SubmissionsDetailsComponent implements OnInit {
  originalTitle = 'Add a submission';
  currentSubmission: Submission;
  @Input() set submission(value: Submission) {
    if (value) this.originalTitle = value.name;
    this.currentSubmission = { ...value };
  }
  @Output() saved = new EventEmitter();
  @Output() reset = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
}
