import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

interface ErrorValidate {
  //significa que va a retornar cualquier cantidad de llaves y seran booleanas
  [s:string]:boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ValidadoresService {

  constructor() { }

  noBaltazar(control: FormControl): {[s:string]: boolean}{
    
    if(control.value?.toLowerCase() === 'baltazar1'){
      
      return{
        noBaltazar: true
      }
    }

    return null;
  }

  existeUsuario( control: FormControl): Promise<ErrorValidate> | Observable<ErrorValidate>{
  
    //para evitar que marque desde un inicio que es invalido agregamos
    //que el control deba tener un valor
    if (!control.value){
      return Promise.resolve(null);
    }


    //si tiene un valor entonces realizamos la promesa y comparamos el valor deseado
    return new Promise((resolve,reject) =>{
      setTimeout(() => {
        if (control.value === 'strider'){
          resolve({existe: true});
        }else{
          resolve(null);
        }
      }, 3500);
    })
  }
    
    
  passwordsIguales(pass1Name: string, pass2Name: string){

    //recibe la forma ya que esta al nivel del formulario
    //y se recibira con todo lo que tenga la forma en el momento que se ejecute
    //lo cual nos servira para si queremos realizar alguna validacion con otros campos
    //diferentes al password
    return (formGoup: FormGroup) => {
      console.log('validar');
      const pass1Control = formGoup.controls[pass1Name];
      const pass2Control = formGoup.controls[pass2Name];

      if(pass1Control.value === pass2Control.value){
        pass2Control.setErrors(null);
      }else{
        pass2Control.setErrors({noEsIgual: true});
      }
    }

  }
}
