const parseEnv = () => {
    const envVariables = process.env
    const arr = []


    for(const [key, value] of Object.entries(envVariables)){
        if(key.startsWith("RSS")){
            arr.push(`${key}=${value}`)
        }
    }
   console.log(arr.join(' '));
   
};

parseEnv();