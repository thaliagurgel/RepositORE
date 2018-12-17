import { ActivatedRoute, Router } from '@angular/router';
import { ObjectService } from './../shared/object.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-metadatos',
  templateUrl: './show-metadatos.component.html',
  styleUrls: ['./show-metadatos.component.css']
})
export class ShowMetadatosComponent implements OnInit {

  objectArray = [];
  objectArrayFiltred = [];

  constructor(private objectService: ObjectService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.objectService.getObjeto().subscribe(
      list => {
        this.objectArray = list.map(item => {
          this.route.params.subscribe( (params) => {
            if (params['id']) {
              if (item.key.toLowerCase().indexOf(params['id'].toLowerCase()) !== -1) {
                console.log(item.key, params['id'].toLowerCase());
                this.objectArrayFiltred.push({
                  $key: item.key,
                  ...item.payload.val()
                });
              }
            } else {
              this.objectArrayFiltred.push({
                $key: item.key,
                ...item.payload.val()
              });
            }
          });
          return {
            $key: item.key,
            ...item.payload.val()
          };
        });
      });
  }

}
