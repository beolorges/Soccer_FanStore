import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'NumberToReal'
})
export class NumberToRealPipe implements PipeTransform {
    transform(value: number): string {
        let valueSplit: string[] = value.toString().split('.');

        if (valueSplit[1]) {
            if (valueSplit[1].length == 1) {
                valueSplit[1] += '0'
            }
        }
        else {
            valueSplit.push('00')
        }

        return 'R$' + valueSplit[0] + ',' + valueSplit[1]
    }
}
