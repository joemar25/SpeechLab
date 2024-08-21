import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';  

@Component({
  selector: 'app-select-module',
  standalone: true,
  imports: [RouterModule, CommonModule],  
  templateUrl: './select-module.component.html',
  styleUrls: ['./select-module.component.css']  
})
export class SelectModuleComponent {
  modules = [
    {
      title: 'Mathematics',
      imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/da748a7b3f0c8b68bb0314af57faf1366ee28bb771e7daaf4c1cb155cef6d49c?placeholderIfAbsent=true&apiKey=377401e3604042c7b3deecb062253d04',
      altText: 'Mathematics subject illustration'
    },
    {
      title: 'English',
      imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/8d8f84e4dd1730b47ca573a6817c2dba52d0dfa428fec36802865a3a265f6b51?placeholderIfAbsent=true&apiKey=377401e3604042c7b3deecb062253d04',
      altText: 'English subject illustration'
    },{
      title: 'Mathematics',
      imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/da748a7b3f0c8b68bb0314af57faf1366ee28bb771e7daaf4c1cb155cef6d49c?placeholderIfAbsent=true&apiKey=377401e3604042c7b3deecb062253d04',
      altText: 'Mathematics subject illustration'
    },
    {
      title: 'English',
      imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/8d8f84e4dd1730b47ca573a6817c2dba52d0dfa428fec36802865a3a265f6b51?placeholderIfAbsent=true&apiKey=377401e3604042c7b3deecb062253d04',
      altText: 'English subject illustration'
    },
  ];
}
