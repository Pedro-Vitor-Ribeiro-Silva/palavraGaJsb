
export interface Verse {
    number: number;
    text: string;
    isHighlighted?: boolean;
    hasSpecialHighlight?: boolean;
    preSpecial?: string;
    specialPhrase?: string;
    postSpecial?: string;
}

export const SAMUEL_17_VERSES: Verse[] = [
    { number: 1, text: "Os filisteus juntaram as suas forças para a guerra e reuniram-se em Socó de Judá." },
    { number: 2, text: "Saul e os israelitas reuniram-se e acamparam no vale de Elá, posicionando-se em linha de batalha." },
    { number: 3, text: "Os filisteus ocupavam uma colina e os israelitas outra, estando o vale entre eles." },
    { number: 4, text: "Um guerreiro chamado Golias, que era de Gate, veio do acampamento filisteu. Ele tinha dois metros e noventa centímetros de altura." },
    { number: 8, text: "Golias parou e gritou às tropas de Israel: 'Por que vocês estão se posicionando para a batalha? Não sou eu um filisteu, e vocês servos de Saul? Escolham um homem para lutar comigo'." },
    { number: 9, text: "'Se ele puder lutar e vencer-me, nós seremos seus escravos; todavia, se eu o vencer e o matar, vocês serão nossos escravos e nos servirão'." },
    { number: 10, text: "E acrescentou: 'Eu desafio hoje as tropas de Israel! Mandem-me um homem para lutar sozinho comigo'." },
    { number: 11, text: "Ao ouvirem as palavras do filisteu, Saul e todos os israelitas ficaram atônitos e apavorados." },
    { number: 16, text: "Durante quarenta dias o filisteu aproximou-se, de manhã e de tarde, e apresentou-se." },
    { number: 26, text: "Davi perguntou aos soldados que estavam ao seu lado: 'O que receberá o homem que matar esse filisteu e salvar a honra de Israel? Quem é esse filisteu incircunciso para desafiar os exércitos do Deus vivo?'" },
    { number: 32, text: "Davi disse a Saul: 'Ninguém deve ficar com o coração abatido por causa desse filisteu; teu servo irá e lutará com ele'." },
    { number: 33, text: "Respondeu Saul: 'Você não tem condições de lutar contra esse filisteu; você é apenas um rapaz, e ele é um guerreiro desde a mocidade'." },
    { number: 37, text: "O Senhor que me livrou das garras do leão e das garras do urso me livrará das mãos desse filisteu. Disse Saul a Davi: 'Vá, e o Senhor esteja com você'." },
    { number: 40, text: "Pegou seu cajado, escolheu no riacho cinco pedras lisas, colocou-as na bolsa de pastor, que usava como alforje, e, com sua atiradeira na mão, aproximou-se do filisteu." },
    { 
        number: 45, 
        text: "Davi, porém, disse ao filisteu: Tu vens contra mim com espada, e com lança, e com escudo; eu, porém, vou contra ti em nome do Senhor dos Exércitos, o Deus dos exércitos de Israel, a quem tens afrontado.",
        hasSpecialHighlight: true,
        preSpecial: "Davi, porém, disse ao filisteu: Tu vens contra mim com espada, e com lança, e com escudo; ",
        specialPhrase: "eu, porém, vou contra ti em nome do Senhor dos Exércitos",
        postSpecial: ", o Deus dos exércitos de Israel, a quem tens afrontado.",
        isHighlighted: true
    },
    { number: 46, text: "Hoje mesmo o Senhor o entregará nas minhas mãos, e eu o ferirei e lhe cortarei a cabeça." },
    { number: 47, text: "Todos os que estão aqui saberão que não é por espada ou por lança que o Senhor concede vitória; pois a batalha é do Senhor, e ele entregará todos vocês em nossas mãos." },
    { number: 49, text: "Retirando uma pedra de seu alforje, arremessou-a com a atiradeira e atingiu o filisteu na testa, de tal modo que ela ficou encravada, e ele caiu com o rosto no chão." },
    { number: 50, text: "Assim Davi venceu o filisteu com uma atiradeira e uma pedra; sem espada na mão, feriu o filisteu e o matou." },
];

export const SLIDES_CONTENT = [
    {
        id: 'intro',
        type: 'intro',
        title: 'A Fé Que Gera o Milagre',
        subtitle: '1 Samuel 17'
    },
    {
        id: 'context',
        type: 'content',
        title: 'Introdução',
        content: `A história de Davi e Golias não fala apenas de coragem; fala de dependência total de Deus.
        
        Enquanto Israel olhava para o tamanho do gigante, Davi olhava para quem estava com ele.`,
        quote: '“A graça é o poder de Deus operando em nossa fraqueza.” (2 Co 12:9)'
    },
    {
        id: 'story-summary',
        type: 'content',
        title: 'O Confronto (Resumo)',
        content: `O cenário era o Vale de Elá. Por 40 dias, o gigante Golias aterrorizou o exército de Israel com desafios diários.
        
        Davi, um jovem pastor que apenas levava suprimentos aos irmãos, ouviu a afronta e indignou-se, não pelo tamanho do gigante, mas pela ofensa ao Deus vivo.
        
        Rejeitando a armadura pesada do rei Saul, Davi avançou armado apenas com seu cajado, sua atiradeira, cinco pedras lisas e uma fé inabalável.
        
        Com uma única pedra certeira na testa, o menino derrubou o gigante e cortou-lhe a cabeça, provando a todos que a batalha é do Senhor.`,
        quote: '“Tu vens contra mim com espada, e com lança, e com escudo; eu, porém, vou contra ti em nome do Senhor dos Exércitos.” (1 Sm 17:45)'
    },
    {
        id: 'point-1',
        type: 'content',
        title: '1. Davi não lutou para ser aceito',
        content: `Ele lutou porque já era escolhido.
        
        1 Samuel 16:13 – Davi já havia sido ungido antes da batalha. Ele não buscou aprovação; ele entrou na guerra com a certeza de que já era escolhido.`,
        summary: 'A graça antecede o milagre.',
        quote: '“Você já viveu um momento em que percebeu o favor de Deus antes mesmo de entender o propósito?”'
    },
    {
        id: 'point-2',
        type: 'content',
        title: '2. Deus é quem lembra de você e te exalta',
        content: `1 Samuel 17:15 – Davi estava no campo, esquecido pelos homens, mas não por Deus.
        
        A graça te encontra onde ninguém vê e te coloca exatamente onde você precisa estar.`,
        quote: '“Você lembra de uma situação em que Deus te posicionou sem você precisar se promover?”'
    },
    {
        id: 'point-3',
        type: 'content',
        title: '3. A fé nasce da memória da fidelidade de Deus',
        content: `1 Samuel 17:37 – A confiança de Davi vinha da memória dos livramentos anteriores (o leão e o urso).
        
        Ele olhou para o gigante lembrando do Deus que já o havia livrado.`,
        quote: '“Qual foi o ‘leão e o urso’ que Deus já te livrou e que hoje fortalece a sua fé?”'
    },
    {
        id: 'point-4',
        type: 'content',
        title: '4. A graça remove o peso da performance',
        content: `1 Samuel 17:38–39 – Davi recusou a armadura de Saul. Ele não precisou vestir o padrão de ninguém.
        
        A graça nos permite caminhar leves — sem comparação, sem culpa, sem exigência humana.
        
        “A Lei exige; a Graça supre.”`,
        quote: '“Há algo que está pesando em você e que Deus não te pediu para carregar?”'
    },
    {
        id: 'point-5',
        type: 'content',
        title: '5. A fé correta sempre manifesta a glória de Deus',
        content: `1 Samuel 17:46 – A vitória de Davi foi a glória de Deus se manifestando através dele.
        
        Na graça, participamos, mas Jesus é o protagonista.`,
        quote: '“Qual gigante você precisa entregar ao Senhor hoje?”'
    },
    {
        id: 'application',
        type: 'list',
        title: 'Aplicação Prática',
        items: [
            { icon: 'heart', text: 'Deus te ama antes da batalha.' },
            { icon: 'sword', text: 'A graça te posiciona para vitórias que você não conquistaria sozinho.' },
            { icon: 'droplet', text: 'A memória da fidelidade sustenta a fé.' },
            { icon: 'mask', text: 'Deus derruba gigantes por meio de pessoas que escolhem confiar, não controlar.' }
        ]
    },
    {
        id: 'announcements',
        type: 'list',
        title: 'Avisos da Semana',
        items: [
            { icon: 'sword', text: 'Acampamento de Homens — 29 e 30 de novembro' },
            { icon: 'droplet', text: 'Batismo — 7 de dezembro' },
            { icon: 'mask', text: 'Espetáculo de Artes “Propósitos” — 13 de dezembro' },
            { icon: 'heart', text: 'Acampa Connect — 14 a 17 de fevereiro' }
        ]
    }
];
