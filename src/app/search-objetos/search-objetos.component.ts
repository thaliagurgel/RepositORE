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
  objectArrayFiltred = [];
  filter = [];
  showDeletedMessage: boolean;
  searchText = '';


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

  filterCondition(e) {
    return (e.title.toLowerCase().indexOf(this.searchText.toLowerCase()) !== -1) ||
    (e.description.toLowerCase().indexOf(this.searchText.toLowerCase()) !== -1) ||
    this.filter.filter((filter) => {
      return (e.type.toLowerCase().indexOf(filter.toLowerCase()) !== -1);
    }).length !== 0;
  }

  formClick(objeto) {
    this.objectService.populateForm(objeto);
  }

  searchFilterObject(search) {
    if (search && search.trim() !== '') {
      this.objectArrayFiltred = this.objectArray.filter((e) => {
        return this.filterCondition(e);
      });
    } else {
      this.objectArrayFiltred = [];
    }
  }

}
