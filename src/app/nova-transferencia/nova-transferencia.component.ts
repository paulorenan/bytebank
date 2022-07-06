import { Component, EventEmitter, Output } from "@angular/core";
import { Transferencia } from "../model/transferencia.model";
import { TransferenciaService } from "../services/transferencia.service";

@Component({
  selector: "app-nova-transferencia",
  templateUrl: "./nova-transferencia.component.html",
  styleUrls: ["./nova-transferencia.component.scss"]
})
export class NovaTransferenciaComponent {

  @Output() aoTransferir = new EventEmitter<any>();

  destino: number | null = null;
  valor: number | null = null;

  constructor(private service: TransferenciaService) {}

  transferir() {
    console.log("Transferindo...");
    const valorEmitir: Transferencia = { valor: this.valor, destino: this.destino }
    this.service.adicionar(valorEmitir).subscribe((resultado) => {
      console.log(resultado);
      this.limparCampos();
    }, error => console.log(error));
  }

  limparCampos() {
    this.destino = null;
    this.valor = null;
  }
}
