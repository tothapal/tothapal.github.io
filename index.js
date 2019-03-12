$('posttext').html('');

database = firebase.database();
/*
$('button').on('click',(event) =>{
    event.preventDefault();
    let cim = $('#title').val();
    $('#title').val("");
    let szoveg = $('#posttext').val();  
    $('#posttext').val(""); 
    let pathtoPosts = "postok";
    let data = {title: cim, text: szoveg, datum: ujdate};
    database.ref(pathtoPosts).push(data);
});
*/

database.ref("postok").once('value').then(data=>{
    data.forEach(element => {
        $('#oldposts').append(`
            <h3>${element.child('title').val()}</h3>
            <h4>${element.child('datum').val()}</h4>
            <div class="szoveg">${element.child('text').val()}</div>
        `);
    });
});
