function loadTableData(){
    const data = JSON.parse(localStorage.getItem('data'));
    if(data){
        const tableElem = document.getElementById('data-table');
        let newRows = '';
        for(let i=0; i<data.length; i++){
            const date = new Date(data[i].year,data[i].month,data[i].day);
            newRows = newRows +'<tr><td>'+data[i].name+'</td><td>'+ date.toLocaleDateString()+'</td><td>'+data[i].email+'</td></tr>' ;
        }
        tableElem.insertAdjacentHTML('beforeend',newRows)
    }
}
document.onload = loadTableData()
