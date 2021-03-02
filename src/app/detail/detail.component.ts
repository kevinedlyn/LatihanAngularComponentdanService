import { Component, OnInit } from "@angular/core";
import { NoteService } from "../note.service";

@Component({
  selector: "app-detail",
  templateUrl: "./detail.component.html",
  styleUrls: ["./detail.component.css"]
})
export class DetailComponent implements OnInit {
  judul: String;
  isi: String;
  tanggal: Date;
  constructor(public note: NoteService) {
    this.judul = this.note.getJudul();
    this.isi = this.note.getIsi();
    this.tanggal = this.note.getTanggal();
  }

  ngOnInit() {}
  setFav() {
    this.note.isFavTrue();
  }
  setNotFav() {
    this.note.isFavFalse();
  }
}
