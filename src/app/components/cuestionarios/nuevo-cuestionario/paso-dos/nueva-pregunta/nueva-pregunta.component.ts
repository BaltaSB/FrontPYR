import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Pregunta } from '../../../../../models/pregunta';
import { ToastrService } from 'ngx-toastr';
import { Respuesta } from '../../../../../models/respuesta';

@Component({
  selector: 'app-nueva-pregunta',
  templateUrl: './nueva-pregunta.component.html',
  styleUrls: ['./nueva-pregunta.component.css']
})
export class NuevaPreguntaComponent implements OnInit {

  @Output() enviarPregunta = new EventEmitter<Pregunta>();

  nuevaPregunta: FormGroup;
  pregunta?: Pregunta;
  rptesCorrecta = 0;

  constructor(private fb: FormBuilder,
              private toast: ToastrService) {
                
                

                this.nuevaPregunta = this.fb.group({
                  titulo: ['', Validators.required],
                  respuestas: this.fb.array([
                    
                  ])
                });
                
  }

  ngOnInit(): void {
    this.respuestasIniciales();
  }

  respuestasIniciales(){
    this.addRespuestas();  
    this.addRespuestas();
  }

  get getRespuestas(): FormArray {
    return this.nuevaPregunta.get('respuestas') as FormArray;
  }

  addRespuestas(): void {

    this.getRespuestas.push(this.fb.group({
      descripcion: ['', Validators.required],
      esCorrecta: 0,
    }));
      // this.getRespuestas.push(respuestas);
  }

  deleteRespuesta(i: number){
    if (this.getRespuestas.length ==2){
      this.toast.error("Debe haber al menos dos respuestas","Error");
    }else{
      this.getRespuestas.removeAt(i);
    }
    
  }

  setRespuestaValida(index: number){
    this.rptesCorrecta = index;
  }

  addPregunta(){
    //Obtenemos titulo de la pregunta
    const descripcionPregunta = this.nuevaPregunta.get('titulo')?.value;

    //Obtenemos el array de las respuestas
    const arrayRespuestas = this.nuevaPregunta.get('respuestas')?.value;

    const arrayRta: Respuesta[]=[];

    arrayRespuestas.forEach((element:any, index: number) => {
      const respuesta: Respuesta = new Respuesta(element.descripcion, false);
     
      if (this.rptesCorrecta === index){
        respuesta.esCorrecta = true;
      }
      arrayRta.push(respuesta);
    });

    const pregunta: Pregunta = new Pregunta(descripcionPregunta, arrayRta);


    this.reset();
    this.enviarPregunta.emit(pregunta);
  }

  reset(){
    this.nuevaPregunta.reset();
    this.getRespuestas.clear();
    this.respuestasIniciales();
  }


  
  get preguntaNoValida(){
    return this.nuevaPregunta.get('titulo')?.invalid && this.nuevaPregunta.get('titulo')?.touched;
  }

  get respuestaNoValida(){
    return this.nuevaPregunta.get('respuestas.descripcion')?.invalid && this.nuevaPregunta.get('respuestas.descripcion')?.touched;
  }
}
