const parseArgs = () => {
    const args = process.argv.slice(2)
    const arr = []
    for(let i = 0; i < args.length; i+=2){
        const propName = args[i].replace("--", "")
        const propValue = args[i +1]
         arr.push(`${propName} = ${propValue}`)
    }

    console.log(arr.join(' '));
    
     
};

parseArgs();