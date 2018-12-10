import { ObjectService } from './../shared/object.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-search-objetos',
  templateUrl: './search-objetos.component.html',
  styleUrls: ['./search-objetos.component.css']
})
export class SearchObjetosComponent implements OnInit {

  constructor(private objectService: ObjectService) { }
  objectArray = [];
  showDeletedMessage: boolean;
  searchText: string = "";


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

  onDelete($key) {
    if (confirm('Tem certeza que deseja excluir esse objeto?')) {
      this.objectService.deleteObjeto($key);
      this.showDeletedMessage = true;
      setTimeout(() => this.showDeletedMessage = false, 3000);
    }
  }

  filterConditionDescription(objeto) {
    return objeto.description.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1;
  }

  filterConditionTitle(objeto) {
    return objeto.title.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1;
  }

  filterCondition(objeto) {
    return  this.filterConditionDescription(objeto) || this.filterConditionTitle(objeto);
  }


}
