import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Telephone Directory';
  public searchString: string;
  selectedArr = []; 
  currentName = '';
  
// declared array of objects. 
   directory = [       
        {name:'Alok1',mobile:'9319855061',age:'34',address:'Delhi'},
        {name:'Alok2',mobile:'1224242442',age:'34',address:'Delhi'},
        {name:'Alok3',mobile:'4345446463',age:'34',address:'Delhi'},
        {name:'Alok4',mobile:'4234244242',age:'34',address:'Delhi'},
        {name:'Alok5',mobile:'5757577733',age:'34',address:'Delhi'},
        {name:'Alok6',mobile:'3353336456',age:'34',address:'Delhi'},
        {name:'Alok7',mobile:'575775757',age:'34',address:'Delhi'},
        {name:'Alok8',mobile:'2424242442',age:'34',address:'Delhi'},
        {name:'Alok9',mobile:'2424242453',age:'34',address:'Delhi'},
        {name:'Alok10',mobile:'565564525',age:'34',address:'Delhi'},
        {name:'Alok11',mobile:'242564632',age:'34',address:'Delhi'},
        {name:'Alok12',mobile:'424253464',age:'34',address:'Delhi'},
        {name:'Alok13',mobile:'432353464',age:'34',address:'Delhi'},
        {name:'Alok14',mobile:'424253525',age:'34',address:'Delhi'},
        {name:'Alok15',mobile:'423432424',age:'34',address:'Delhi'},
        {name:'Alok16',mobile:'345334546',age:'34',address:'Delhi'},
        {name:'Alok17',mobile:'557575725',age:'34',address:'Delhi'},
        {name:'Alok18',mobile:'434656453',age:'34',address:'Delhi'},
        {name:'Alok19',mobile:'343253663',age:'34',address:'Delhi'},
        {name:'Alok20',mobile:'234234235',age:'34',address:'Delhi'},   
   ];

    onload();

   onload(){
     if(localStorage.getItem('dataSource')){
        this.selectedArr = JSON.parse(localStorage.getItem('dataSource'));
     }
   }

    onSelect(row) {
      this.currentName = row.name;
      console.log(row);
      //store selected data to localStorage
      localStorage.setItem('dataSource', JSON.stringify(row));
  }
}
