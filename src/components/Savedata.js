export const savedata = (name, data) =>{
    // let anotherdata = data;
    console.log(data);
    let str = JSON.stringify(data)
    localStorage.setItem(`${name}`,str);

}

export const getdata = () => {
    // let data = localStorage.getItem()
    var archive = [];
    for (var i = 0; i<localStorage.length; i++) {
        archive.push(JSON.parse(localStorage.getItem(localStorage.key(i)))) ;
    }
    return archive;
}

export const deleteItemsinlocalstorage  = (title) => {
    localStorage.removeItem(title);
}


