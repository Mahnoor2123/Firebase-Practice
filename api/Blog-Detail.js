let urlParam = new URLSearchParams(window.location.search);
let myParam = urlParam.get("id");
console.log(myParam);

db.collection("Blogs").doc(myParam).get().then((blogData) => {
    console.log(blogData.data());

    $("#blogs").append(`
        <div class="blog">
        <h3>${blogData.data().blogTitle}</h3>
        <p >${blogData.data().blogDescription}</p>
        </div> 
`)
    $('#blogTitle').val(blogData.data().blogTitle);
    $('#blogDescription').val(blogData.data().blogDescription)
})
    .catch((err) => {
        window.alert(err.message)
    });





function Edit() {
    let updatedblogTitle = $("#blogTitle").val();
    let updatedblogDescription = $("#blogDescription").val();

    if (updatedblogTitle == "" || updatedblogDescription == "") {
        window.alert("Fill all fields")

    } else
        db.collection("Blogs").doc(myParam).update(
            {
                blogTitle: updatedblogTitle,
                blogDescription: updatedblogDescription
            }

        ).then(() => {
            window.alert("Updated sucessfully");
            window.location.reload()
        }).catch((err) => {

        });
}

function Delete() {
    db.collection('Blogs').doc(myParam).delete().then(() => {
        window.alert("Deleted");
        window.location = "../Home.html"

    }

    )
}
