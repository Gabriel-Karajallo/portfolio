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
      time: '4 meses',
      company: 'Insinno España',
      description: ' Trabajé en el desarrollo de aplicaciones web dinámicas y escalables utilizando Angular, enfocándome en la creación de interfaces de usuario intuitivas y funcionales. Durante mi experiencia, colaboré con diferentes perfiles profesionales, lo que fomentó un entorno de innovación y resolución conjunta de problemas.',
    },
    {
      title: 'Desarrollador Independiente',
      time: '3 años',
      company: 'Creación de proyectos',
      description: 'Diseñé interfaces para mejorar la experiencia de usuario.',
      image: 'assets/img/experience2.jpg',
    },

  ];
}
