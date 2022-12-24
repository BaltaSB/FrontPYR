import { Component, OnInit } from '@angular/core';
import { CuestionarioService } from '../../../../services/cuestionario.service';
import { Cuestionario } from '../../../../models/cuestionario';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-list-cuestionarios',
  templateUrl: './list-cuestionarios.component.html',
  styleUrls: ['./list-cuestionarios.component.css']
})
export class ListCuestionariosComponent implements OnInit {
  

  cuestionarios: Cuestionario[];
  constructor(private cuestionarioService: CuestionarioService) { 
    this.cuestionarios = [];
  }

  ngOnInit(): void {
    this.listadoCuestionarios();
  }


  listadoCuestionarios(){
    this.cuestionarioService.listadoCuestionariosByUser().subscribe(data => {
      console.log(data);
      this.cuestionarios = data.data;
      console.log(this.cuestionarios[0]);
    }, error =>{
      console.log(error);
    });

  }

  eliminarCuestionario(nombre: string, index: number = 0){
    const cuest: Cuestionario[] = this.cuestionarios;
    

    Swal.fire({
      title: 'Deseas eliminar el cuestionrio: '+ nombre +'?',
      text: "No se podra restablecer!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminalo!'
    }).then((result) => {
      if (result.isConfirmed) {

        this.cuestionarioService.eliminarCuestionario(index).subscribe(data => {
          if (data.exito == 1){
            Swal.fire(
              'Eliminado!',
              'El Cuestionario ha sido eliminado.',
              'success'
            )
            this.cuestionarios = cuest.filter((item) => item.id !== index)
            console.log(this.cuestionarios);
          }
          else{
            Swal.fire(
              'Error!',
              'El Cuestionario No ha sido eliminado.',
              'error'
            )
          }
        }, error => {
          console.log(error);
        })
       
      }
    })
  }
}
