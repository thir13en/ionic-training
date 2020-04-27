import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-modal-example',
  templateUrl: './modal-example.component.html',
  styleUrls: ['./modal-example.component.scss'],
})
export class ModalExampleComponent implements OnInit {
  @Input() dataInput: string;

  constructor(
      private modalCtrl: ModalController,
  ) { }

  ngOnInit() {}

  closeModal(): void {
    // it allows for further control if you set up an id of the modal when opening
    // so if you have more than one modal, it can close specifically the modal requested
    this.modalCtrl.dismiss(
        { data: 'closing data passed' },
        'free name role'
    );
  }

}
