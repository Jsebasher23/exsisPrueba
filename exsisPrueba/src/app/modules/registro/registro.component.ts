import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/shared/service.service';
import { Programas } from './programas.model';
import { filter,  map } from 'rxjs/operators';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  validateForm: FormGroup;
  programas : Programas[] = []

  constructor(private formBuilder: FormBuilder, private service : ServiceService) { }

  ngOnInit(): void {
    //this.service.getInteres().subscribe(data => console.log(data));
    this.getInteres();
    this.initForm();
  }

  initForm(): void {
    this.validateForm = this.formBuilder.group({
      name: ['',
        [Validators.required,
        Validators.pattern('^[a-zA-Z ]*$')]
      ],
      lastName:['',[Validators.required,Validators.pattern('^[a-zA-Z ]*$')]],
      email:['',[Validators.email]],
      phone: ['',[Validators.maxLength(10),Validators.pattern('[0-9]*')]],
      program:[''],
      comment:['']
      
    });
  }

  onSubmit() {
    this.service.postForm(this.validateForm.value).subscribe(res => {
      console.log(res);
      
    });
  }

  getInteres(){

    this.service.getInteres()
    // .pipe(
    //   map((res:Programas[]) => {res.filter(item,index) => {return res.indexOf(item) === index;}})
    // )
    .subscribe((res : Programas[]) => {
      console.log(res);
      this.programas = res;

    });
  }

}
