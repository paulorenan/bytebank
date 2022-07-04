import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-nova-transferencia",
  templateUrl: "./nova-transferencia.component.html",
  styleUrls: ["./nova-transferencia.component.scss"]
})
export class NovaTransferenciaComponent {

  @Output() aoTransferir = new EventEmitter<any>();

  valor: number;
  destino: number;

  constructor() {
    this.valor = 0;
    this.destino = 0;
  };

  transferir() {
    console.log("Transferindo...");
    console.log("Valor: " + this.valor);
    console.log("Destino: " + this.destino);
    this.aoTransferir.emit({ valor: this.valor, destino: this.destino });
  }
}
