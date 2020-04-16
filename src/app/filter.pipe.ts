import { Pipe, PipeTransform, Injectable } from '@angular/core';
@Pipe({
    name: 'filter'
})
@Injectable()
export class FilterPipe implements PipeTransform {
    transform(items, value: string): any[] {
        if (!items) {
            return [];
        }
        if (!value) {
            return items;
        }
        var newArray = items.filter(function (el) {
                                        return el.name == value ||
                                                el.mobile == value
                                                
                                        });

        return newArray;
    }
}