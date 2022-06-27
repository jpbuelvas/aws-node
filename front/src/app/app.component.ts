import { Component, OnInit } from '@angular/core';
import { Data } from './models/data.models';
import { ConsumoService } from './services/consumo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'frontMusk';
  public info: Data[]=[];

  cargada: boolean =false;
  private data : any;
 public url: any;
  constructor(private consumeService: ConsumoService) { }

  ngOnInit(): void {
    this.cargarConsumo();

  }

  cargarConsumo(){
    this.consumeService.getConsumo().subscribe(resp => {
      this.cargada=true;
      this.data = resp;
      this.info = this.data;
      //console.log(this.info);
      this.url = `https://twitter.com/${this.info[0].user.screen_name}`;
    })
  }


}
