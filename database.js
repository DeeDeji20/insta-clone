const request = indexedDB.open("instagram", 5)
request.onsuccess= ()=>{
    console.log("success creating or accessing db");
    const database = request.result
    addEntryToDB('bio', {name:"DeeDeji", description:"Hey, I am Dee and I am a programmer"})
}
request.onupgradeneeded = ()=>{
    const db = request.result
    // db.deleteObjectStore('bio')
    // db.deleteObjectStore('gallery')
    db.createObjectStore('bio', {autoIncrement: true})
    db.createObjectStore('gallery', {autoIncrement: true})
}

const addEntryToDB = (storeName, entry)=>{
    const database = request.result
    const transaction= database.transaction([storeName], 'readwrite')
    const store = transaction.objectStore(storeName)
    store.add(entry)
}

request.onerror =()=>{
    console.log("error creating db");
}

export {request, addEntryToDB}