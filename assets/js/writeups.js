async function loadWriteups() {

    try {

        const response = await fetch("assets/data/posts.json");

        if (!response.ok) {
            throw new Error("Unable to load posts.json");
        }


        const posts = await response.json();


        const selectedPosts = posts.filter(post =>
            post.type === "writeup"
        );


        selectedPosts.forEach(selectedPost => {


            const card = createPostCard(selectedPost);


            switch(selectedPost.category) {


                case "ctf":

                    document.getElementById(
                        "ctf-writeups"
                    ).innerHTML += card;

                    break;



                case "bug-bounty":

                    document.getElementById(
                        "bug-bounty-writeups"
                    ).innerHTML += card;

                    break;

            }

        });


    } catch(err) {

        console.error(err);

    }

}


document.addEventListener(
    "DOMContentLoaded",
    loadWriteups
);
