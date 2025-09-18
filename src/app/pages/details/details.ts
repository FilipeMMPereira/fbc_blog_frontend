import { Component, OnInit } from '@angular/core';
import { Sidebar } from "../../components/sidebar/sidebar";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [Sidebar, CommonModule],
  templateUrl: './details.html',
  styleUrl: './details.css'
})
export class Details {

}
