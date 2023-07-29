import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})

interface Skill {
  id: number;
  name: String;
}
export class SkillsComponent {
  public skills: Skill[] = [
    {id: 1, name: 'Photography'},
    {id: 2, name: 'Coding'}
  ];

}
