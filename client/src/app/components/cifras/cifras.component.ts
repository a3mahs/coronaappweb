import { Component, OnInit } from '@angular/core';
import { GenericService } from '../../services/generic.service';

@Component({
  selector: 'app-cifras',
  templateUrl: './cifras.component.html',
  styleUrls: ['./cifras.component.css']
})
export class CifrasComponent implements OnInit {

  totalConfirmados: Number;
  totalMuertes: Number;
  totalRecuperados: Number;

  constructor(private genericService: GenericService) { }

  ngOnInit(): void {
    this.genericService.getTotalConfirmados().subscribe(
      res => {
        console.log(res);
        this.totalConfirmados = res[0].confirmados;
      },
      error => console.log(error)
    )
    this.genericService.getTotalMuertes().subscribe(
      res => {
        console.log(res);
        this.totalMuertes = res[0].muertes;
      },
      error => console.log(error)
    )
    this.genericService.getTotalRecuperados().subscribe(
      res => {
        console.log(res);
        this.totalRecuperados = res[0].recuperados;
      },
      error => console.log(error)
    )
  }

}
