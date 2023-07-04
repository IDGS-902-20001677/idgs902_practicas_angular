import { Component } from '@angular/core';

interface Order {
  client: CustomerData;
  orders: Pizza[];
  date: Date;
  total: number;
}

interface Pizza {
  size: string;
  ingredients: string[];
  quantity: number;
  subtotal: number;
}

interface CustomerData {
  name: string;
  address: string;
  phone: string;
}

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent {
  selectedSize: string = 'chica';
  jamonSelected: boolean = false;
  pinaSelected: boolean = false;
  champinonesSelected: boolean = false;
  quantity: number = 1;
  pizzas: Pizza[] = [];
  listaPedidos: Order[] = [];

  calculateSubtotal() {
    let sizePrice = 0;
    switch (this.selectedSize) {
      case 'chica':
        sizePrice = 40;
        break;
      case 'mediana':
        sizePrice = 80;
        break;
      case 'grande':
        sizePrice = 120;
        break;
    }

    let ingredientsPrice = 0;
    if (this.jamonSelected) {
      ingredientsPrice += 10;
    }
    if (this.pinaSelected) {
      ingredientsPrice += 10;
    }
    if (this.champinonesSelected) {
      ingredientsPrice += 10;
    }

    const subtotal = (sizePrice + ingredientsPrice) * this.quantity;

    return subtotal;
  }

  addToCart() {
    const newPizza: Pizza = {
      size: this.selectedSize,
      ingredients: this.getSelectedIngredients(),
      quantity: this.quantity,
      subtotal: this.calculateSubtotal()
    };
    if (this.quantity<=0){
      alert("Ingresa una cantidad válida")
    }else{
      this.pizzas.push(newPizza);
    }
  }

  getSelectedIngredients(): string[] {
    const ingredients: string[] = [];
    if (this.jamonSelected) {
      ingredients.push('Jamon');
    }
    if (this.pinaSelected) {
      ingredients.push('Piña');
    }
    if (this.champinonesSelected) {
      ingredients.push('Champiñones');
    }

    return ingredients;
  }

  customerData: CustomerData = {
    name: '',
    address: '',
    phone: ''
  };

  showOrderSummary: boolean = false;

  captureCustomerData() {
    if (this.customerData.name && this.customerData.address && this.customerData.phone) {
      this.showOrderSummary = true;
    } else {
      alert('Por favor, ingrese todos los datos del cliente.');
    }
  }

  cancelOrder() {
    this.pizzas = [];
    this.showOrderSummary = false;
  }

  removeFromCart(index: number) {
    this.pizzas.splice(index, 1);
  }

  finalizeOrder() {
    if (this.pizzas.length === 0) {
      alert('Agregue al menos una pizza antes de finalizar el pedido.');
      return;
    }
  
    if (confirm('¿Está seguro de finalizar el pedido?')) {
      const order: Order = {
        client: { ...this.customerData },
        orders: this.pizzas,
        date: new Date(),
        total: this.calculateTotal()
      };
      this.listaPedidos.push(order);
      console.log('Pedido:', order);
  
      this.showOrderSummary = true;
    }
  }

  calculateTotal(): number {
    let total = 0;
    for (let pizza of this.pizzas) {
      total += pizza.subtotal;
    }
    return total;
  }

  calculateDailyTotal(): number {
    let total = 0;
    for (let pedido of this.listaPedidos) {
      total += pedido.total;
    }
    return total;
  }
  
}


