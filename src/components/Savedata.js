export const savedata = (data) =>{
    // let anotherdata = data;
    let str = JSON.stringify(data)
    localStorage.setItem(`${data}`,str);

}

export const getdata = () => {
    // let data = localStorage.getItem()
    var archive = [];
    for (var i = 0; i<localStorage.length; i++) {
        archive.push(JSON.parse(localStorage.getItem(localStorage.key(i)))) ;
    }
    return archive;
}

