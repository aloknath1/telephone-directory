import { Pipe, PipeTransform, Injectable } from '@angular/core';
//
@Pipe({ name: 'search', pure: false })
export class SearchPipe implements PipeTransform {
   
  transform(categories: any, searchText: string, column: any): any 
  {
 console.log('aaaaaaa');
      console.log(searchText);
    if (searchText == null || searchText == "") return categories;
    if (typeof column == 'string') {
      return categories.filter((category) => {
        return (category[column] || "").toLowerCase().indexOf(searchText || "").toLowerCase() > -1;
      })
    } else {
      let returnArray: any;
      for (let object of categories) {
        for (let col of column) {
          if ((object[col] || "").toLowerCase().indexOf(searchText).toLowerCase() !== -1) {
            returnArray.push(object);
            break;
          }
        }
      }
      return returnArray;
    }
  }
};