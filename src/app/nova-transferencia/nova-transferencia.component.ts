import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-nova-transferencia",
  templateUrl: "./nova-transferencia.component.html",
  styleUrls: ["./nova-transferencia.component.scss"]
})
export class NovaTransferenciaComponent {

  @Output() aoTransferir = new EventEmitter<any>();

  destino: number | null = null;
  valor: number | null = null;

  transferir() {
    console.log("Transferindo...");
    console.log("Valor: " + this.valor);
    console.log("Destino: " + this.destino);
    this.aoTransferir.emit({ valor: this.valor, destino: this.destino });
  }
}
