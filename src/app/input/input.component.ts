import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NoteService } from "../note.service";

@Component({
  selector: "app-input",
  templateUrl: "./input.component.html",
  styleUrls: ["./input.component.css"]
})
export class InputComponent implements OnInit {
  constructor(private router: Router, public mynote: NoteService) {}
  judul: String;
  isi: String;
  tanggal: Date;

  ngOnInit() {}
  inputNote() {
    this.mynote.setIsi(this.isi);
    this.mynote.setJudul(this.judul);
    this.mynote.setTanggal(this.tanggal);
  }
}
