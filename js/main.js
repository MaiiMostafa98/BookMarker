
var siteName = document.getElementById('sName');
var siteUrl = document.getElementById('sURL');


var store = [];


                  
                        // key
if (localStorage.getItem('sites') != null) {

            // bt7wel el string le array of object w t5zenha fe el array w t3rdha
    store = JSON.parse(localStorage.getItem('sites'));
    displaySites();
}



// function bt5zn el data ely hya el objects (array of objects) fe localstorage
function saveToLocalStorage()
{     
                        // key     value ( el array ) w bn7welha le string
    localStorage.setItem('sites', JSON.stringify(store));
}


function addSite()
{
     if (siteName.value === '' || siteUrl.value === '') {
        document.getElementById('alert').innerHTML='*** Please fill all fields ***';
        return;
    }
  
     site ={
        sName : siteName.value ,
        sURL : siteUrl.value,
    };

    store.push(site);

    saveToLocalStorage() 
    displaySites()
    clear()
   
}



function displaySites()
{
    var display = '';

    for( var i = 0 ; i < store.length ; i++){
        display = display + `
           <tr>
           <td>${ i + 1}</th>
            <td>${store[i].sName}</th>
            <td><a href="${store[i].sURL}" target="_blank"> <button id="Visit" class="btn btn-outline-secondary"> Visit </button></a></td>
            <td><button id="delete" onclick="deleteSite(${i})" class="btn btn-outline-secondary">Delete</button></td>
            <td><button id="Update" onclick="updateSite(${i})" class="btn btn-outline-secondary">Update</button></td>
           </tr>
        `
    };

    document.getElementById('tbody').innerHTML= display;

}


function clear()
{
    siteName.value = '';
    siteUrl.value = '';
}


function deleteSite(i)
{
    store.splice( i , 1 );
    saveToLocalStorage();
    displaySites();
}


var index ;

function updateSite(i)
{
    index = i ;
    siteName.value = store[i].sName;
    siteUrl.value = store[i].sURL;

    document.getElementById('convert').innerHTML = `
        <button onclick="edit()" class="btn btn-success px-5 me-2">Edit</button>
        <button onclick="cancel()" class="btn btn-secondary px-5">Cancel</button>
    `;
}




function edit()
{

    store[index].sName = siteName.value;
    store[index].sURL = siteUrl.value;

    saveToLocalStorage();
    displaySites();
    clear();
    cancel();

}




function cancel() {
    index = -1;
    clear();
    document.getElementById('convert').innerHTML = `
        <button onclick="addSite()" class="btn btn-primary px-5">Submit</button>
    `;
}