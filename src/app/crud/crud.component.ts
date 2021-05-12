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

  posicion =-1;


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

  resetForm(){
    this.City = '';
    this.Name='';
    this.Email='';
    this.posicion =-1;
  }

 //agregar un registro
  Add(Name,Email,City){
    console.log('agregando datos...');
    var data = {name: Name, city : City, email:Email}
    if(this.posicion ==-1)
    {
      this.people.push(data);
    }
    else
    {
      this.people[this.posicion]=data;
    }

    this.resetForm();

  }

  //eliminar un registro
  delete(i){
    this.people.splice(i, 1);
  }

  edit(person)
  {
      this.posicion = this.people.indexOf(person);

      this.City= person.city;
      this.Name= person.name;
      this.Email= person.email;
  }


}
