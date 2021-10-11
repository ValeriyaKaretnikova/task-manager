const dataFetcher = async function(url=null) {
    
    const response = await fetch(url);
    const toDoJson = await response.json();

    return toDoJson;
}
export {dataFetcher};