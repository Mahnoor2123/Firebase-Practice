let ID = localStorage.getItem("userId")
console.log(ID);

let urlParam = new URLSearchParams(window.location.search);

let myParam = urlParam.get('id');

console.log(myParam);


db.collection("Blogs").where("userId", "==", ID).get().then((data) => {
    data.forEach((singleBlog) =>{
    console.log(singleBlog.data());


    $("#blogs").append(`
    <div class="blog">
            <h3 id="blogTitle">${singleBlog.data().blogTitle}</h3>
            <p id="blogDescription">${singleBlog.data().blogDescription}</p>
        </div>
    `)
    })
}).catch((err) => {
    
});