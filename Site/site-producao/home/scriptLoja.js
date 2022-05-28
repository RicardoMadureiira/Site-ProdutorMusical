const items = [
    {
        id: 0,
        nome: 'Example 1',
        img: '/img/beat.png',
        descricao: 'descrição',
        preco: 'R$: 99,00'
    },

    {
        id: 1,
        nome: 'Example 2',
        img: '/img/beat.png',
        descricao: 'descricao 2',
        preco: 'R$ 199.00'
    },

    {
        id: 2,
        nome: 'Example 3',
        img: '/img/beat.png',
        descricao: 'Descricao 3',
        preco: 'R$ 299,00'
    },

    {
        id: 3,
        nome: 'Example 4',
        img: '/img/beat.png',
        descricao: 'Descrição 4',
        preco: '499,00'
    }
]

function iniciarLoja() {
    var sectionBeats = document.getElementById('beat');

    items.map((valor) => {
        
        sectionBeats.innerHTML += `
        
                <div class="lista-beats">
                    <img src="`+valor.img+`"/>
                    <p>`+valor.nome+`</p>
                    <p>`+valor.descricao+`</p>
                    <p>`+valor.preco+`</p>
                </div>
    
                        
                  
                    
              
        `
    })
}

iniciarLoja()