import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InsuranceScenariosService {
  private policeCase: string = 'customer';

  // Metodo para establecer el valor de policeCase
  setPoliceCase(value: string): void {
    this.policeCase = value;
  }

  // Metodos que devuelven true o false segun el valor de policeCase
  isNewBusinessAgent(): boolean {
    return this.policeCase === 'agent';
  }

  isNewBusinessCustomer(): boolean {
    return this.policeCase === 'customer';
  }

  isRenewal(): boolean {
    return this.policeCase === 'renewal';
  }

  isPmiEcuador(): boolean {
    return this.policeCase === 'pmiecuador';
  }
}
