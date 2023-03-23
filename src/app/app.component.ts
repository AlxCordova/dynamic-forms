import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dynamic-forms';
  myFormConfig = [
    {
      "isWizard": true,
      "title": "Informacion básica",
      "inputs": [
        {
          "type": "text",
          "name": "razon_social",
          "label": "Razón Social",
          "required": true
        },
        {
          "type": "text",
          "name": "nombre_comercial",
          "label": "Nombre Comercial",
          "required": true
        },
        {
          "type": "text",
          "name": "representante",
          "label": "Representante",
          "required": true
        },
        {
          "type": "text",
          "name": "nit",
          "label": "NIT",
          "required": true
        },
        {
          "type": "number",
          "name": "dpi",
          "label": "DPI",
          "required": true
        },
        // {
        //   "type": "dropdown",
        //   "name": "gender",
        //   "label": "Gender",
        //   "options": [
        //     { "value": "male", "label": "Male" },
        //     { "value": "female", "label": "Female" },
        //     { "value": "other", "label": "Other" }
        //   ],
        //   "required": true
        // },
        // {
        //   "type": "checkbox",
        //   "name": "nuevo_cliente",
        //   "label": "Nuevo Cliente",
        //   "required": true
        // }
      ]
    },
    {
      "isWizard": true,
      "title": "Contacto",
      "inputs": [
        {
          "type": "text",
          "name": "nombres",
          "label": "Nombres",
          "required": true
        },
        {
          "type": "text",
          "name": "apellidos",
          "label": "Apellidos",
          "required": true
        },
        {
          "type": "number",
          "name": "telefono",
          "label": "Telefono",
          "required": true
        },
        {
          "type": "email",
          "name": "correo",
          "label": "Correo electrónico",
          "required": true
        },
        {
          "type": "dropdown",
          "name": "puesto",
          "label": "Puesto",
          "options": [
            { "value": "vendedor", "label": "Vendedor" },
            { "value": "comerciante", "label": "Comerciante" },
            { "value": "otro", "label": "Otros" }
          ],
          "required": true
        }
      ]
    }
  ]
  
}
