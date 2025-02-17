import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  @onInput() imageUrl: string = 'URL_DE_LA_IMAGEN_AQUI'; 
  @onInput() title: string = 'BIG NEW YORKER BACON & BANANA PEPPERS';
  @onInput() description: string = 'Es una pizza de gran tamaño, inspirada al estilo New York con rebanadas grandes, de pepperoni y trocitos de bacon, con abundante rebanadas de chile banana peppers de sabor suave con toque ácido, con una mezcla de orégano y queso parmesano sobre los ingredientes y mantequilla de ajo a la orilla.';
  @onInput() price: string = 'LPS. 329.00';

  cantidad: number = 1;

  constructor(public alertController: AlertController) {}

  incrementCantidad() {
    this.cantidad++;
  }

  decrementCantidad() {
    if (this.cantidad > 1) {
      this.cantidad--;
    }
  }

  async ordenar() {
    const alert = await this.alertController.create({
      header: 'Confirmación',
      message: 'Ha agregado correctamente el producto a su carrito',
      buttons: ['Aceptar'],
    });

    await alert.present();
  }
}