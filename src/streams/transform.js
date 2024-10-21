import {Transform} from "node:stream"
import { stdin, stdout } from "node:process"

class ReverseTextStream extends Transform {
    _transform(chunk, encoding, callback){
        const transformStream = chunk.toString().split('').reverse().join('')
        this.push(transformStream)
        callback()
    }
}


const transform = async () => {
    const reserveStream = new Transform()
    stdin.pipe(reserveStream).pipe(stdout)

    process.stdin.on('error', (err) => {
        console.error('Error reading from stdin', err);
    });
    
    process.stdout.on('error', (err) => {
        console.error('Error writing to stdout', err);
    });

};

await transform();