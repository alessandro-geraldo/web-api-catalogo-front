import { Component, OnInit } from '@angular/core';
import { Categoria } from '../../../model/categoria';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.scss'
})
export class CategoriasComponent implements OnInit {
  displayedColumns: string[] = ['nome','imagem','acao'];
  dataSource!: Categoria[];
  isLoadingResults = true;

  constructor(private api: ApiService){}

  ngOnInit() {
    this.api.getCategorias()
    .subscribe(res => {
      this.dataSource = res;
      console.log(this.dataSource);
      this.isLoadingResults = false;
    }, err => {
        console.log(err);
        this.isLoadingResults = false;
    });
  }
}