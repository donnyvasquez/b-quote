import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InsuranceScenariosService {
  private policeCase!: string;

  constructor() {
    // Si hay un valor en sessionStorage, lo cargamos al inicializar el servicio
    const storedPoliceCase = sessionStorage.getItem('policeCase');
    if (storedPoliceCase) {
      this.policeCase = storedPoliceCase;
    }
  }

  // Método para establecer el valor de policeCase y guardarlo en sessionStorage
  setPoliceCase(value: string): void {
    this.policeCase = value;
    sessionStorage.setItem('policeCase', value);  // Guardar en sessionStorage
  }

  // Método para obtener el valor de policeCase
  getPoliceCase(): string {
    // Si el valor no está en memoria, lo obtenemos de sessionStorage
    if (!this.policeCase) {
      this.policeCase = sessionStorage.getItem('policeCase') || '';
    }
    return this.policeCase;
  }

  // Métodos que devuelven true o false según el valor de policeCase
  isNewBusinessAgent(): boolean {
    return this.getPoliceCase() === 'agent';
  }

  isNewBusinessCustomer(): boolean {
    return this.getPoliceCase() === 'customer';
  }

  isRenewal(): boolean {
    return this.getPoliceCase() === 'renewal';
  }

  isPmiEcuador(): boolean {
    return this.getPoliceCase() === 'pmiecuador';
  }
}
