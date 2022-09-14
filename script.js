function saveData(){
    const name = document.getElementById('name').value;
    const month = document.getElementById('month').value;
    const day = document.getElementById('day').value;
    const year = document.getElementById('year').value;
    const email = document.getElementById('email').value;
    let data = JSON.parse(localStorage.getItem('data'));
    if(!data){
        data = []
    }
    data.push({
        name,month,day,year,email
    })
    localStorage.setItem('data',JSON.stringify(data))

}
