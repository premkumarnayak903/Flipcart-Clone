let categories = [
    {
        img_src: "https://rukminim1.flixcart.com/fk-p-flap/64/64/image/a22a213ca6221b65.png?q=100",
        title: "minutes",
        href: "",
    },
    {
        img_src: "https://rukminim1.flixcart.com/fk-p-flap/64/64/image/5f2ee7f883cdb774.png?q=100",
        title: "mobile",
        href: "",
    },
    {
        img_src: "https://rukminim1.flixcart.com/fk-p-flap/64/64/image/e90944802d996756.jpg?q=100",
        title: "tv",
        href: "",
    },
    {
        img_src: "https://rukminim1.flixcart.com/fk-p-flap/64/64/image/3c647c2e0d937dc5.png?q=100",
        title: "flight",
        href: "",
    },
    {
        img_src: "https://rukminim1.flixcart.com/fk-p-flap/64/64/image/e730a834ad950bae.png?q=100",
        title: "grocery",
        href: ""
    }
];

// Select the section where you want to add categories
let container = document.getElementById("categories");

categories.map((element) => {
    let image = document.createElement("img");
    image.src = element.img_src;

    let title = document.createElement("p");
    title.innerHTML = element.title;

    let box = document.createElement("div");
    box.style.textAlign = "inline"; // Optional styling
    box.style.margin = "1px";
    box.appendChild(image);
    box.appendChild(title);

    container.appendChild(box); // Append the box to #categories
});
