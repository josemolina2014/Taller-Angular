import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  dtOptions: DataTables.Settings = {}; //configuracion de la tabla
  
  // objeto con las personas que se mostraran en la tabla
  people = [
    {name: 'Ana', city: 'Cali', email: 'ana@outlook.com'},
    {name: 'Marco', city: 'Bogota', email: 'marco@gmail.com'}
  ];

  //datos bindeados al html
  City = '';
  Name='';
  Email='';

  constructor() { }
  

  ngOnInit(): void {

    //configuracion de la tabla
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
    lengthMenu : [5, 10, 25],
      processing: true
    };

  }

 //agregar un registro
  Add(Name,Email,City){
    console.log('agregando datos...');
    var data = {name: Name, city : City, email:Email}
    this.people.push(data);
  }

  //eliminar un registro
  delete(i){
    this.people.splice(i, 1);
  }


}
