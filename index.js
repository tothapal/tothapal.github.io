$('posttext').html('');

database = firebase.database();

$('button').on('click',(event) =>{
    event.preventDefault();
    var d = new Date();
    var ujdate = d.toLocaleDateString("hu-HU",{year: "numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"})
    let cim = $('#title').val();
    $('#title').val("");
    let szoveg = $('#posttext').val();  
    $('#posttext').val(""); 
    let pathtoPosts = "postok";
    let data = {title: cim, text: szoveg, datum: ujdate};
    database.ref(pathtoPosts).push(data);
});

database.ref("postok").once('value').then(data=>{
    data.forEach(element => {
        $('#oldposts').append(`
            <h3>${element.child('title').val()}</h3>
            <h4>${element.child('datum').val()}</h4>
            <div class="szoveg">${element.child('text').val()}</div>
        `);
    });
});
