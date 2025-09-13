import { Component } from '@angular/core';
import { Footer } from "../../components/footer/footer";
import { RouterOutlet } from "@angular/router";
import { Navbar } from "../../components/navbar/navbar";

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [Footer, RouterOutlet, Navbar],
  templateUrl: './layout.html',
  styleUrl: './layout.css'
})
export class Layout {

}
