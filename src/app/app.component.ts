import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { PropertyBindingComponent } from './components/property-binding/property-binding.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,PropertyBindingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name: string = "Khumesh";
  status: boolean = false;
  title = 'anguler-app';
  getMyName(){
    return "My Name is Nidhu"
  }
}
