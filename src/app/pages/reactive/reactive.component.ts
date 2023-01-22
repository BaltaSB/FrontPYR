import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidadoresService } from '../../services/validadores.service';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  forma:FormGroup	;

  constructor(private fb:FormBuilder,
              private validadores:ValidadoresService) {
    
   }

  ngOnInit(): void {
    this.crearFormulario();
    this.cargarDataAlFormulario();
    this.crearListeners();
  }

  //el getter es una forma de obtener una propiedad y en este caso nos regresara un boolean para ocuparlo en la validacion del html
  get pasatiempos(){
    return this.forma.get('pasatiempos') as FormArray
  }

  get nombreNoValido(){
    return this.forma.get('nombre').invalid && this.forma.get('nombre').touched
  }
  get apellidoNoValido(){
    return this.forma.get('apellido').invalid && this.forma.get('apellido').touched
  }
  get correoNoValido(){
    return this.forma.get('correo').invalid && this.forma.get('correo').touched
  }

  get usuarioNoValido(){
    return this.forma.get('usuario').invalid && this.forma.get('usuario').touched
  }

  get estadoNoValido(){
    return this.forma.get('direccion.estado').invalid && this.forma.get('direccion.estado').touched
  }

  get ciudadNoValido(){
    return this.forma.get('direccion.ciudad').invalid && this.forma.get('direccion.ciudad').touched
  }

  get pass1NoValido(){
    return this.forma.get('pass1').invalid && this.forma.get('pass1').touched
  }

  get pass2NoValido(){
    const pass1 =this.forma.get('pass1').value;
    const pass2 =this.forma.get('pass2').value;
    return (pass1 === pass2)? false :true;
  }

  crearFormulario(){
    this.forma = this.fb.group({
      //para el validador personalizado no requerimos que se pongan parentesis aunque sea una funcion
      nombre: ['', [Validators.required, Validators.minLength(5), this.validadores.noBaltazar]],
      apellido: ['', Validators.required],
      correo: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      //para los validadores asincrnos lo manejamos en el tecer parametro
      usuario: ['', , this.validadores.existeUsuario],
      pass1:['', Validators.required],
      pass2:['', Validators.required],
      direccion: this.fb.group({
        estado: ['',Validators.required],
        ciudad: ['',Validators.required],
      }),
      //forma de usar arreglos en formlarios, al menos debe estar vacio el arreglo
      pasatiempos: this.fb.array([])
    }, {
      Validators: this.validadores.passwordsIguales('pass1', 'pass2')
    });
  }

  crearListeners(){
    //detectar cuando algun valor del formulario es cambiado
    this.forma.valueChanges.subscribe( valor => {
      console.log(valor);
    })

    this.forma.statusChanges.subscribe( status => console.log([status]));


    //si queremos escuchar un campo en especifico
    this.forma.get('nombre').valueChanges.subscribe(console.log)
  }

  cargarDataAlFormulario(){
    //debemos indicar todos los campos, aunque sean nulos o vacios
    // this.forma.setValue({
    //   nombre: 'Balta',
    //   apellido: 'del rio',
    //   correo: 'balta.rt21@gmail.com',
    //   direccion: {
    //     estado: 'durango',
    //     ciudad: 'gomez'
    //   },
    //   pasatiempos:([])
    // })


    //Si usamos el reset no es necesrrio especificar todos los campos
    this.forma.reset({
      nombre: 'Balta',
      apellido: 'del rio',
      correo: 'balta.rt21@gmail.com',
      pass1: '123',
      pass2: '123',
      direccion: {
        estado: 'durango',
        ciudad: 'gomez'
      }
    });

    //y para inicializar la parte de los pasatiempos o arreglos lo hariamos como sigue haciendo
    //referencia al get
    ['comer','dormir'].forEach(valor => { this.pasatiempos.push(this.fb.control(valor))});
  }

  agregarPasatiempo(){
    this.pasatiempos.push( this.fb.control('', Validators.required))
    
  }

  borrarPasatiempo(i: number){
    this.pasatiempos.removeAt(i);
  }

  guardar(){
    if (this.forma.invalid){
      console.log('invalid');
      return Object.values(this.forma.controls).forEach(control => {
        //debemos validar si control es una instancia de FormGroup, en caso de ser asi
        //devemos evaluar ahora los controles hijos para ver si son validos
       
       
        if (control instanceof FormGroup) {
          
          Object.values(control.controls).forEach(control => control.markAsTouched());
        }else{
          control.markAsTouched();
          
        }
        
      })
      
    }
    this.forma.reset({
      //podemos especificar solo ciertos campos a diferencia del setValue y no marcara error
      //los campos que deseamos lo inicializamos a lo que queremos, como en el caso de los select
      
    });
  }

}
