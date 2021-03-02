import { Component, OnInit } from "@angular/core";
import { NoteService } from "../note.service";

@Component({
  selector: "app-favorite",
  templateUrl: "./favorite.component.html",
  styleUrls: ["./favorite.component.css"]
})
export class FavoriteComponent implements OnInit {
  judul: String;
  isi: String;
  tanggal: Date;
  isFav: Boolean;
  constructor(public note: NoteService) {
    this.judul = this.note.getJudul();
    this.isi = this.note.getIsi();
    this.tanggal = this.note.getTanggal();
    this.isFav = this.note.getisFav();
  }

  ngOnInit() {}
}
