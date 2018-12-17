import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class ObjectService {

  constructor(private firebase: AngularFireDatabase) { }
  objectsList: AngularFireList<any>;

  form = new FormGroup({
    $key: new FormControl(null),
    title: new FormControl('', Validators.required),
    creator: new FormControl(''),
    subject: new FormControl(''),
    description: new FormControl(''),
    publisher: new FormControl(''),
    contributor: new FormControl(''),
    date: new FormControl(''),
    type: new FormControl(''),
    format: new FormControl(''),
    identifier : new FormControl(''),
    source: new FormControl(''),
    language: new FormControl(''),
    relation: new FormControl(''),
    coverage: new FormControl(''),
    rights: new FormControl('')
  });


  getObjeto() {
    this.objectsList = this.firebase.list('objetos');
    return this.objectsList.snapshotChanges();
  }


  insertObjeto(objeto) {
    this.objectsList.push({
      title: objeto.title,
      creator: objeto.creator,
      subject: objeto.subject,
      description: objeto.description,
      publisher: objeto.publisher,
      contributor: objeto.contributor,
      date: objeto.date,
      type: objeto.type,
      format: objeto.format,
      identifier : objeto.identifier,
      source: objeto.source,
      language: objeto.language,
      relation: objeto.relation,
      coverage: objeto.coverage,
      rights: objeto.rights
    });
  }

  populateForm(objeto) {
    this.form.setValue(objeto);
  }

  updateObjeto(objeto) {
    this.objectsList.update(objeto.$key,
      {
        title: objeto.title,
        creator: objeto.creator,
        subject: objeto.subject,
        description: objeto.description,
        publisher: objeto.publisher,
        contributor: objeto.contributor,
        date: objeto.date,
        type: objeto.type,
        format: objeto.format,
        identifier : objeto.identifier,
        source: objeto.source,
        language: objeto.language,
        relation: objeto.relation,
        coverage: objeto.coverage,
        rights: objeto.rights
      });
  }

  deleteObjeto($key: string) {
    this.objectsList.remove($key);
  }


}




