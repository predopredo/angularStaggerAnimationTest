import { Component, OnInit } from '@angular/core';
import { fade } from '../animations/fade';
import { cascadeSlide } from '../animations/cascadeSlide';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  animations: [cascadeSlide, fade]
})

export class SkillsComponent implements OnInit {
  skills: string[] = ['Angular', 'Vue.js', 'Frontend Developer']
  errorMessage: string = ""
  submitted: boolean = false

  constructor() { }

  ngOnInit() {
  }

  onAddSkill(f) {
    if (f.valid) {
      this.skills.push(f.value.skill)
      f.reset()
      this.submitted = false
    } else if (f.controls.skill.errors.required) {
      this.submitted = true
      this.errorMessage = 'Please enter a skill'
    } else if (f.controls.skill.errors.minlength) {
      this.submitted = true
      this.errorMessage = 'The skill field must have at least 3 characters.'
    }
  }

  onRemoveSkill(i) {
    this.skills.splice(i, 1)
  }
}
