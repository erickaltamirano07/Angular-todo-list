import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-labs',
  imports: [CommonModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css',
})
export class LabsComponent {
  welcome = 'Hola!';
  tasks = ['Instalar el Angular CLI', 'Crear proyecto', 'Crear componentes'];
  tasksSignal = signal([
    'Instalar el Angular CLI',
    'Crear proyecto',
    'Crear componentes',
  ]);
  name = 'Erick';
  age = 18;
  disabled = true;
  img = 'https://w3schools.com/howto/img_avatar.png';
  name1 = signal('Erick');

  person = {
    name: 'erick',
    age: 18,
    avatar: 'https://w3schools.com/howto/img_avatar.png',
  };
  person1 = signal({
    name: 'erick',
    age: 5,
    avatar: 'https://w3schools.com/howto/img_avatar.png',
  });

  clickHandler() {
    alert('Hola');
  }

  changeHandler(event: Event) {
    console.log(event);
  }

  keyDownHandler(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    console.log(input.value);
  }

  changeSignalHandler(event: Event) {
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.name1.set(newValue);
  }

  changeAge(event: Event) {
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.person1.update((prevState) => {
      return {
        ...prevState,
        age: parseInt(newValue, 10),
      };
    });
  }

  changeName(event: Event) {
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.person1.update((prevState) => {
      return {
        ...prevState,
        name: newValue,
      };
    });
  }
}
