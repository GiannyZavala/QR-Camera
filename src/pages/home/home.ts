import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner,BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import {Contacts,Contact,ContactField,ContactName} from '@ionic-native/contacts';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  options: BarcodeScannerOptions;
  results: {};

  constructor(private barcode: BarcodeScanner,public navCtrl: NavController,private contacts:Contacts) {

  }
   
  async scanBarcode(){
    this.options={
      prompt:'Escanea el código QR para guardar contacto'
    }
    this.results= await this.barcode.scan(this.options);
    console.log(this.results);
  }
  crearContacto(){
		var contact: Contact = this.contacts.create();
		var avatar ="./assets/icon/avatar.png";
		contact.displayName = "francisco"; //this.datos['nombre'];
		contact.phoneNumbers = 3111231178; //[new ContactField(this.datos['tipoNumero'], this.datos['numero'])];
		contact.photos = [new ContactField('url',avatar,false)]
		contact.save().then(
		  () => { 
			console.log('Contact Guardado!', contact)
			
		  },
		  (error: any) => {
			console.error('Error al guardar el contacto.', error)
			
		  }
		);
	  }
 
}
