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
  //results: {};
  results=null;

  constructor(private barcode: BarcodeScanner,public navCtrl: NavController,private contacts:Contacts) {

  }
   
  async scanBarcode(){
    this.options={
      prompt:'Escanea el código QR para guardar contacto'
    }
    this.barcode.scan().then(barcodeData => {
      this.results=barcodeData.text;
    }, (err)=>{
        console.log('Error: ' ,err);
    });


    //---Nota:--- Cambio la forma de pedir el Scan ----- // atte-Francisco sosa
    //this.results= await this.barcode.scan(this.options);
    //console.log(this.results);
  
  }
  crearContacto(){
		var contact: Contact = this.contacts.create();
		var avatar ="./assets/icon/avatar.png";
		contact.displayName = "Roberto"; //this.datos['nombre'];
		contact.phoneNumbers = [new ContactField('mobile', '917-555-5432', true)];
		contact.photos = [new ContactField('url',avatar,false)]
		contact.save().then(
		  () => { 
      console.log('Contact Guardado!', contact)
      console.log(contact.displayName + " "+ contact.phoneNumbers );
			
		  },
		  (error: any) => {
			console.error('Error al guardar el contacto.', error)
			
		  }
		);
	  }
 
}
