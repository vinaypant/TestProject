import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'uppercase'

})
export class UpperCasePipe implements PipeTransform {
    transform(value: any, ...args: any[]) {
        if (!value)
            return value;
        if (typeof value !== 'string') {
            console.log('invalid data')
                //throw invalidPipeArgumentError(UpperCasePipe,value);
        }
        console.log('args',args);
        return value.toUpperCase();
    }
}