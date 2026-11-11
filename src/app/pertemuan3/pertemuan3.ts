import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-pertemuan3',
  styleUrl: './pertemuan3.css',
  templateUrl: './pertemuan3.html',
})
export class Pertemuan3 {
 judul: string = 'Pertemuan 3';
  bilA: number = 10;
  bilB: number = 5;
  photo: string = 'https://subali.stikom-bali.ac.id/images/AGS.jpg';

  nama: string = '';
  tipe: string = '';

  hitung(bilA: number, bilB: number): void {
    alert(bilA + bilB);
  }

  tes(e: Event): void {
    const data = e.target as HTMLInputElement;

    this.judul = data.value;
}
}