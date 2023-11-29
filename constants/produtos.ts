export enum Categoria{
    Bolo,
    Cupcake,
    Torta
} 
export const produtos = [
    {
        id: 1,
        categoria : Categoria.Torta,
        name: 'Torta Damasco',
        price: 30,
        image: "/tortas/damasco.jpg"
    },
    {
        id: 2,
        categoria : Categoria.Torta,
        name: 'Torta Banoffe',
        price: 45,
        image: "/tortas/banoff.jpg"
    },
    {
        id: 3,
        categoria : Categoria.Torta,
        name: 'Torta Creme com Bolacha',
        price: 45,
        image: "/tortas/creme-com-bolacha.jpg"
    },
    {
        id: 4,
        categoria : Categoria.Torta,
        name: 'Torta de Biz',
        price: 50,
        image: "/tortas/torta-biz.jpg"
    },
    {
        id: 5,
        categoria : Categoria.Torta,
        name: 'Torta de Amora',
        price: 87,
        image: "/tortas/amora.jpg"
    },
    {
        id: 6,
        categoria : Categoria.Torta,
        name: 'Torta Frutas Vermelhas',
        price: 55,
        image: "/tortas/frutas-variadas.jpg"
    },
    {
        id: 7,
        categoria : Categoria.Torta,
        name: 'Torta de Bolacha',
        price: 25,
        image: "/tortas/bolacha.jpg"
    },
    {
        id: 8,
        categoria : Categoria.Torta,
        name: 'Torta de Morango',
        price: 30,
        image: "/tortas/morango.jpg"
    },
    {
        id: 9,
        categoria : Categoria.Cupcake,
        name: 'Cupcake Ganache',
        price: 4.99,
        image: "/cupcakes/ganache.png"
    },
    {
        id: 10,
        categoria : Categoria.Cupcake,
        name: 'Cupcake Mousse de Chocolate',
        price: 4.99,
        image: "/cupcakes/mousse-chocolate.jpg"
    },
    {
        id: 11,
        categoria : Categoria.Cupcake,
        name: 'Cupcake Mousse de Maracujá',
        price: 4.99,
        image: "/cupcakes/maracuja.jpg"
    },
    {
        id: 12,
        categoria : Categoria.Cupcake,
        name: 'Cupcake Ninho com Óreo',
        price: 6.99,
        image: '/cupcakes/cupcake-decorado-oreo.jpg'
    },
    {
        id: 13,
        categoria : Categoria.Cupcake,
        name: 'Cupcake Ganache Com Cereja',
        price: 5.99,
        image: '/cupcakes/ganache-cereja.jpg'
    },
    {
        id: 14,
        categoria : Categoria.Cupcake,
        name: 'Cupcake Mousse com Trento',
        price: 5.99,
        image: '/cupcakes/trento.jpg'
    },
    {
        id: 15,
        categoria : Categoria.Cupcake,
        name: 'Cupcake Brigadeiro',
        price: 5.99,
        image: '/cupcakes/brigadeiro-formiga.jpg'
    },
    {
        id: 16,
        categoria : Categoria.Cupcake,
        name: 'Cupcake Recheado com Chocolate',
        price: 6.99,
        image: '/cupcakes/recheado.jpg'
    },
    {
        id: 17,
        categoria : Categoria.Bolo,
        name: 'Bolo Brigadeiro Vulcão',
        price: 40.00,
        image: "/bolos/vulcao.jpg"
      },
      {
        id: 18,
        categoria : Categoria.Bolo,
        name: 'Nega Maluca',
        price: 25.0,
        image: "/bolos/nega-maluca.jpg"
      },
      {
        id: 19,
        categoria : Categoria.Bolo,
        name: 'Bolo Morango com Raspas De Chocolate',
        price: 60,
        image: "/bolos/raspas-de-chocolate.jpg"
      },
      {
        id: 20,
        categoria : Categoria.Bolo,
        name: 'Bolo Kitkat',
        price: 100,
        image: "/bolos/kitkat.jpg"
      },
      {
        id: 21,
        categoria : Categoria.Bolo,
        name: 'Bolo De Chocolate com Recheio de Creme',
        price: 80,
        image: "/bolos/recheio-creme.jpg"
      },
      {
        id: 22,
        categoria : Categoria.Bolo,
        name: 'Bolo de Brigadeiro',
        price: 90,
        image: "/bolos/brigadeiro.jpg"
      },
      {
        id: 23,
        categoria : Categoria.Bolo,
        name: 'Bolo Sensação',
        price: 130,
        image: "/bolos/sensacao-morango.jpg"
      },
      {
        id: 24,
        categoria : Categoria.Bolo,
        name: 'Bolo de Morango com Amora',
        price: 110,
        image: "/bolos/frutas.jpg"
      }
]

export type Product = typeof produtos; 