let myId = localStorage.getItem('userId');

console.log(myId);

function addBlog() {

    let blogTitle = document.getElementById("blogTitle").value;
    let blogDescription = document.getElementById("blogDescription").value;
    if (blogTitle == "" || blogDescription == "") {
        window.alert("Enter all Fields")

    } else {
        $('#submitBtn').html('Please Wait....')
        let blogRef = db.collection("Blogs").doc();
        let data = {
            blogTitle: blogTitle,
            blogDescription: blogDescription,
            blogId: blogRef.id,
            userId: myId

        }
        blogRef.set(data).then(() => {
            window.alert('Blog Added Successfully');
            window.location.reload();
            window.location.href = "../Home.html"
            localStorage.setItem('blogId');

        }).catch((err) => {
            window.alert(err.message);
        });

    }

}