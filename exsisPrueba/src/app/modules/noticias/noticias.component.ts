import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/shared/service.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {
  noticia: any = {
    title:'',
    body:''
  };
  constructor(private service : ServiceService) { }

  ngOnInit(): void {
    this.service.getNoticias()
    .subscribe((res:any) => {this.noticia = res;});
  }
  

}
