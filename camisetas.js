// OBJETO CONSTRUCTOR
class listaDeCamisetas{
    constructor(ID, club, precio, talle, imagen, catalogo){
        this.ID= ID;
        this.club = club;
        this.precio = parseInt(precio);
        this. talle = talle;
        this.imagen= imagen;
        this.catalogo= catalogo;
    }
}

//CAMISETAS//
const camisetas=[
    {
        ID: 1,
        club: "Borussia Dortmund Home 2022/23",
        precio: 16000,
        talle: "S-M-L-XL",
        imagen: "./imagenes/borussia.jpg",
        catalogo: "Internacionales"
    },
    {
        ID: 2,
        club: "Manchester City Home 2022/23",
        precio: 16000,
        talle: "S-M",
        imagen: "./imagenes/manchestercity.png",
        catalogo: "Internacionales"
    },
    {
        ID: 3,
        club: "Manchester United Home 2022/23",
        precio: 17000,
        talle: "S-M",
        imagen: "./imagenes/manchesterunited.jpg",
        catalogo: "Internacionales"
    },
    {
        ID: 4,
        club: "Everton Home 2022/23",
        precio: 15000,
        talle: "S-M",
        imagen: "./imagenes/everton.jpg",
        catalogo: "Internacionales"
    },
    {
        ID: 5,
        club: "Boca Juniors Home 2022/23",
        precio: 12000,
        talle: "S-M",
        imagen: "./imagenes/boca.jpg",
        catalogo: "Locales"
    },
    {
        ID: 6,
        club: "River Plate Home 2022/23",
        precio: 12000,
        talle: "S-M",
        imagen: "./imagenes/river.jpg",
        catalogo: "Locales"

    },
    {
        ID: 7,
        club: "Talleres Home 2022/23",
        precio: 11000,
        talle: "S-M",
        imagen: "./imagenes/talleres.jpg",
        catalogo: "Locales"

    },
    {
        ID: 8,
        club: "Rosario Central Away 2022/23",
        precio: 11000,
        talle: "S-M",
        imagen: "./imagenes/rosario.jpg",
        catalogo: "Locales"
    },
    {
        ID: 9,
        club: "R.Madrid Retro Temporada 2012/13",
        precio: 19000,
        talle: "S-M-L-XL",
        imagen: "./imagenes/realmadrid.jpg",
        catalogo: "Retro"
    },
    {
        ID: 10,
        club: "Barcelona Retro Temporada 2019",
        precio: 19000,
        talle: "S-M",
        imagen: "./imagenes/barcelona.jpg",
        catalogo: "Retro"

    },
    {
        ID: 11,
        club: "Celtic Retro Temporada 1988",
        precio: 21000,
        talle: "S-M",
        imagen: "./imagenes/celtic.jpg",
        catalogo: "Retro"
    },
    {
        ID: 12,
        club: "Liverpool Retro Temporada 1996",
        precio: 22000,
        talle: "S-M",
        imagen: "./imagenes/liverpool.jpeg",
        catalogo: "Retro"
    }
];