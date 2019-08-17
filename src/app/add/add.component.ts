import { ApiService } from "./../api.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-add",
  templateUrl: "./add.component.html",
  styleUrls: ["./add.component.css"]
})
export class AddComponent implements OnInit {
  public id: number;
  public name: string;
  public year: number;
  public lastname: string;
  index;
  public rows: Array<{
    id: number;
    name: string;
    year: number;
    lastname: string;
  }> = [];
  constructor(private api: ApiService) {}

  buttonClicked() {
    this.rows.push({
      id: this.id,
      name: this.name,
      year: this.year,
      lastname: this.lastname
    });
    console.log(this.rows);
    //if you want to clear input
    this.id = null;
    this.name = null;
    this.year = null;
    this.lastname = null;
  }
  delete(d) {
    this.index = this.rows.indexOf(d);
    this.rows.splice(this.index, 1);
  }
  ngOnInit() {}
}
