import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Programa } from 'src/app/reducers/noticias.reducer';
import { ServiceService } from 'src/app/shared/service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

   selectedItemTimer$: Observable<any>;

  noticias : any[] = [];

  constructor(private _service : ServiceService,
              private router : Router,              
              private store : Store<Programa>) { 
                this.selectedItemTimer$ = store.select('id')
               }

  ngOnInit(): void {
    this._service.getNoticias()
      .subscribe((res:any) => {
        this.noticias = res;
      });
  }

  getDetalle(item : any){
    this.router.navigate(['/noticias', item.id]);
    
  }

}
