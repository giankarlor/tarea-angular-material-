import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SecurityService } from 'src/app/services/security.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  user={
    userName: '',
    password: ''
  }

  constructor(
    private security: SecurityService,
    private router: Router) { }

  ngOnInit(): void{
  }

  onLogin(): void {
    this.security.login(this.user).subscribe(
      (res) => {
        localStorage.setItem('token',res.token);
        this.router.navigate(['clientes']);
      }
    )
  }

}

