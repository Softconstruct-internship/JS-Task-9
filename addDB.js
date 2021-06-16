const form = document.querySelector("form");


const createPost = async (e) => {
    const document={
        title:form.title.value,
        albumId:form.albumId.value,
    }
    await fetch("http://localhost:3000/photo",{
        method:"POST",
        body:JSON.stringify(document),
        headers:{"Content-Type":"application/json"}
    })
    window.location.replace('/index.js');
}

form.addEventListener("submit", createPost);
