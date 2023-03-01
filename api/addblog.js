function addBlog() {
    let blogTitle = document.getElementById("blogTitle").value;
    let blogDescription = document.getElementById("blogDescription").value;
    if (blogTitle == "" || blogDescription == "") {
        window.alert("Enter all Fields")

    } else {
        let blogRef = db.collection("Blogs").doc();
        let data = {
            blogTitle: blogTitle,
            blogDescription: blogDescription,
            blogId: blogRef.id
        }
        blogRef.set(data).then(() => {
            window.alert('Blog Added Successfully');
            window.location.reload();
            window.location.href="../Home.html"
            localStorage.setItem('blogId' );
            
        }).catch((err) => {
            
        });

    }

}