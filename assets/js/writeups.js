async function loadWriteups() {

    try {

        const response = await fetch("assets/data/posts.json");

        if (!response.ok) {
            throw new Error("Unable to load posts.json");
        }

        const posts = await response.json();


        const writeups = posts.filter(post =>
            post.type === "writeup"
        );


        writeups.forEach(writeup => {

            const card = createPostCard(writeup);


            if (writeup.category === "ctf") {

                document.getElementById("ctf-writeups").innerHTML += card;

            }


            if (writeup.category === "bug-bounty") {

                document.getElementById("bug-bounty-writeups").innerHTML += card;

            }

        });


    } catch (err) {

        console.error(err);

    }

}


document.addEventListener(
    "DOMContentLoaded",
    loadWriteups
);
