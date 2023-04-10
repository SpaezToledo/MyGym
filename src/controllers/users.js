module.exports={
    login: (req, res) =>res.render("login",{
        title: "MYGYM LOGIN",
        styles:["home", "home-tablet", "home-desktop", "style"]
    } )
}