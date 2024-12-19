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
      description: ' Utilizando el framework Angular y enfocándome en la creación de interfaces de usuario intuitivas y funcionales. Trabaje con un equipo de trabajo, lo que fomentó un entorno de innovación y resolución conjunta de problemas.',
    },
    {
      title: 'Desarrollador Independiente',
      time: '3 años',
      company: 'Creación de proyectos',
      description: 'He creado aplicaciones enfocándome en el consumo de APIs RESTful. Estas experiencias me han permitido fortalecer mis habilidades técnicas y resolver problemas de manera autónoma.',
      image: 'assets/img/experience2.jpg',
    },

  ];
}
