import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent {
  experiences = [
    {
      title: 'Desarrollador Front-end',
      company: 'Insinno España',
      description: 'Desarrollé aplicaciones web usando Angular y React.',
      image: 'assets/img/experience1.jpg',
    },
    {
      title: 'Desarrollador Independiente',
      company: 'Creative Labs',
      description: 'Diseñé interfaces para mejorar la experiencia de usuario.',
      image: 'assets/img/experience2.jpg',
    },

  ];
}
