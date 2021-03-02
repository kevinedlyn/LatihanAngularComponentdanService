import { Injectable } from "@angular/core";

@Injectable()
export class NoteService {
  constructor() {}
  private judul: String;
  private isi: String;
  private tanggal: Date;
  private isFav: Boolean;

  public setJudul(temp: String) {
    this.judul = temp;
  }

  public getJudul() {
    return this.judul;
  }

  public setIsi(temp: String) {
    this.isi = temp;
  }

  public getIsi() {
    return this.isi;
  }

  public setTanggal(temp: Date) {
    this.tanggal = temp;
  }

  public getTanggal() {
    return this.tanggal;
  }

  public isFavTrue() {
    this.isFav = true;
  }

  public isFavFalse() {
    this.isFav = false;
  }

  public getisFav() {
    return this.isFav;
  }
}
