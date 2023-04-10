module.exports={
    home: (req, res) => res.render("home", {
        title:"MYGYM",
    styles:["home", "home-tablet", "home-desktop", "style"],
articles: [
    {
        title: "Articulo 1",
        img: "https://acortar.link/7phQij",
        description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas quia esse adipisci harum explicabo eius dolore, ex necessitatibus magnam ad.",
        offert:true
    },
    {
        title: "Articulo 2",
        img: "https://acortar.link/7phQij",
        description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas quia esse adipisci harum explicabo eius dolore, ex necessitatibus magnam ad.",
        offert:false
    },{
        title: "Articulo 3",
        img: "https://acortar.link/7phQij",
        description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas quia esse adipisci harum explicabo eius dolore, ex necessitatibus magnam ad.",
        offert:true
    }
] })
}