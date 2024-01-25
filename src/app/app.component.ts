import { ResourceLoader } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  
  title = 'Promise';


  myPromise(nome: string):Promise<string>{
    return new Promise((resolve, reject)=>{
      if(nome === 'Fabricio'){
        setTimeout(() => {
          resolve('Seja Bem Vindo '+nome);
        }, 10000);
      }
      else{
        setTimeout(() => {
          reject('Ops! Você não é o Fabricio');  
        }, 10000);
        
      }
    })
  }

  ngOnInit(): void {
    this.myPromise('Fabricios')
    .then(result=>console.log(result))
    .catch(erro => console.log(erro))
  }
}
