import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'sortnumber',
    pure: false
})
export class SortPipe implements PipeTransform {
    //transform(numbers: number[], ...args: any[]) {
    transform(numbers: number[]) {

        return numbers.sort((a, b) => a - b);
    }

}