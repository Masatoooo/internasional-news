import { Component, } from '@angular/core';
interface Mahasiswa {
  nim: string;
  nama: string;
  ipk: number;
  jurusan: string;
}
@Component({
  imports: [],
  selector: 'app-pertemuan4',
  styleUrl: './pertemuan4.css',
  templateUrl: './pertemuan4.html',
})
export class Pertemuan4  {
  nim: string = "230030046";
  nama: string = "Masato Arcadius Araiki";
  umur: number = 20;
  isStatusMenikah: boolean = false;
  
  
  dataNilaiMahasiswa: number [] = [100, 75, 80.5, 90, 88];
  dataMahasiswa: Mahasiswa[] =[
    {nim: "001",nama: "Wahyu",ipk: 3.9,jurusan: "Informatika"},
    {nim: "002",nama: "Sri",ipk: 3.2,jurusan: "Manajemen"},
    {nim: "003",nama: "Doni",ipk: 3.8,jurusan: "Informatika"},
  ];
  x: number | string = "";  
  jk: 'F' | 'M' = 'M';


  tes(): void {
    let jk = this.jk;
    this.isStatusMenikah = true;
    const namaLengkap : string = this.dataMahasiswa[0].nama;

    if(this.isStatusMenikah) {
      alert("Anda Sudah Menikah")
    } else {
      alert("Anda Belum Menikah")
    }

    let statusMenikah : string = this.isStatusMenikah ? "Menikah" : "Belum Menikah";
    console.log(statusMenikah)
    switch(this.jk){
      case 'F': console.log ('Female'); break;
      case 'M': console.log ('Male'); break;
      default : console.log ('JK Tidak Terdaftar'); break;
    }

    for(let i = 0; i < 10; i++){
      console.log(i+1);
    }
    
    for (let item of this.dataNilaiMahasiswa){
      console.log(item)
    
}    
}
calculateTotal(price:number, qty: number): number {
  return price * qty;
}

tes2(): void {
  
  console.log('tes 1');
  setTimeout(()=>{
    console.log('tes 2')
  },5000);
  console.log('tes 3');
}
}
