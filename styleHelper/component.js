export default function createStyles(...styles){
    return styles.reduce(
        (prev, next) => ({
            ...prev, ...resolveStyle(next)
        })
    )
}

export function resolveStyle(input){
    if (Array.isArray(input)){
        // Array
        return arrayToSingleObject(input);
    } else if (typeof input === "object" && input !== undefined){
        // Real object
        return input
    }

    console.trace(`Got a style type that couldn't be detected. To avoid crashes, an empty object was returned.`)
    return {};
}

const arrayToSingleObject = (arr) => {
    // https://stackoverflow.com/a/44325124/9878135
    return arr.reduce(
        ((obj, item) => ({...obj, ...item}))
    );
}
