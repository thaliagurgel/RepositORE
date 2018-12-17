import { Component, OnInit } from '@angular/core';

import * as Typed from 'typed.js';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
     const options = {
      stringsElement: '#typed-strings',
      strings: ['Repositório de Objetos de Robótica Educacional',
      'Universidade do Estado do Rio Grande do Norte - UERN'],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 200,
      smartBackspace: true,
      fadeOut: true,
      showCursor: false,
      startDelay: 1000,
      loop: true
      };
      const typed = new Typed('.typing-element', options);
  }

}
