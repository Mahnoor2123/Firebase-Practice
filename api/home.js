db.collection("Blogs").get().then((data)=>{
    data.forEach((blogData)=>{
console.log(blogData.data());


$("#blogs").append(`

 <div class="blog">
<h3 id="blogTitle">${blogData.data().blogTitle}</h3>
<p id="blogDescription">${blogData.data().blogDescription.slice(0,500)}</p>
<a href="/api/Blog-Detail.html?id=${blogData.data().blogId}">View Detail</a>


</div>
`)
    })
})


