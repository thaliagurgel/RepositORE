import { ObjectService } from './../shared/object.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-metadatos',
  templateUrl: './show-metadatos.component.html',
  styleUrls: ['./show-metadatos.component.css']
})
export class ShowMetadatosComponent implements OnInit {

  constructor(private objectService: ObjectService) { }
  objectArray = [];

  ngOnInit() {
    this.objectService.getObjeto().subscribe(
      list => {
        this.objectArray = list.map(item => {
          return {
            $key: item.key,
            ...item.payload.val()
          };
        });
      });
  }


}
