import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class HomePage {

  // Funções 

  limpar () {
  }

  maisMenos () {

  }

  dividir () {

  }

  multiplicacao () {

  }

  subtracao () {

  }

  adicao () {
    
  }

  resultado: number = 0;

  exibir(numero: number) {
		// usamos this para acessar a variável que foi criada acima
		this.resultado = numero * numero;

		Number(this.resultado)
	}

}
