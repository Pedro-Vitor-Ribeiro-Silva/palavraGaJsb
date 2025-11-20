export interface Verse {
    number: number;
    text: string;
    isHighlighted?: boolean; // General highlight (Yellow)
    hasSpecialHighlight?: boolean; // Specific special highlight (Blue/Orange)
    specialPhrase?: string; // The exact phrase to highlight differently
    preSpecial?: string; // Text before special phrase
    postSpecial?: string; // Text after special phrase
}

// Complete John 9 Text (NVI inspired Portuguese text)
export const JOHN_9_VERSES: Verse[] = [
    { number: 1, text: "Ao passar, Jesus viu um cego de nascença.", isHighlighted: true },
    { number: 2, text: "Seus discípulos lhe perguntaram: \"Mestre, quem pecou: este homem ou seus pais, para que ele nascesse cego?\"", isHighlighted: true },
    { 
        number: 3, 
        text: "", 
        isHighlighted: true,
        hasSpecialHighlight: true,
        preSpecial: "\"Nem ele nem seus pais pecaram\", disse Jesus, \"mas ",
        specialPhrase: "isso aconteceu para que a obra de Deus se manifestasse na vida dele.",
        postSpecial: "\""
    },
    { number: 4, text: "Enquanto é dia, precisamos realizar a obra daquele que me enviou. A noite se aproxima, quando ninguém pode trabalhar.", isHighlighted: true },
    { number: 5, text: "Enquanto estou no mundo, sou a luz do mundo\".", isHighlighted: true },
    { number: 6, text: "Tendo dito isso, ele cuspiu no chão, misturou terra com saliva e aplicou-a aos olhos do homem.", isHighlighted: true },
    { number: 7, text: "Então lhe disse: \"Vá lavar-se no tanque de Siloé\" (que significa Enviado). O homem foi, lavou-se e voltou vendo.", isHighlighted: true },
    { number: 8, text: "Seus vizinhos e os que anteriormente o tinham visto mendigando perguntaram: \"Não é este o mesmo homem que costumava ficar sentado, mendigando?\"" },
    { number: 9, text: "Alguns afirmavam que sim. Outros diziam: \"Não, apenas se parece com ele\". Mas ele próprio insistia: \"Sou eu mesmo\"." },
    { number: 10, text: "\"Então, como foram abertos os seus olhos?\", interrogaram-no eles." },
    { number: 11, text: "Ele respondeu: \"O homem chamado Jesus misturou terra com saliva, colocou-a nos meus olhos e me disse que fosse lavar-me em Siloé. Fui, lavei-me, e agora vejo\"." },
    { number: 12, text: "Eles lhe perguntaram: \"Onde está esse homem?\" \"Não sei\", disse ele." },
    { number: 13, text: "Levaram aos fariseus o homem que fora cego." },
    { number: 14, text: "Era sábado o dia em que Jesus havia misturado terra com saliva e aberto os olhos daquele homem." },
    { number: 15, text: "Então os fariseus também lhe perguntaram como ele recuperara a visão. O homem respondeu: \"Ele colocou uma mistura de terra e saliva em meus olhos, eu me lavei e agora vejo\"." },
    { number: 16, text: "Alguns dos fariseus disseram: \"Esse homem não é de Deus, pois não guarda o sábado\". Mas outros perguntavam: \"Como pode um pecador fazer tais sinais miraculosos?\" E houve divisão entre eles." },
    { number: 17, text: "Tornaram, pois, a perguntar ao cego: \"Que diz você a respeito dele? Foi os seus olhos que ele abriu\". O homem respondeu: \"Ele é um profeta\"." },
    { number: 18, text: "Os judeus não acreditaram que ele fora cego e havia recuperado a visão até que mandaram chamar os pais dele." },
    { number: 19, text: "E lhes perguntaram: \"É este o seu filho, que vocês dizem ter nascido cego? Como ele pode ver agora?\"" },
    { number: 20, text: "Responderam os pais: \"Sabemos que ele é nosso filho e que nasceu cego." },
    { number: 21, text: "Mas não sabemos como ele pode ver agora ou quem lhe abriu os olhos. Perguntem a ele. Ele já tem idade; falará por si mesmo\"." },
    { number: 22, text: "Seus pais disseram isso porque tinham medo dos judeus, pois estes já haviam decidido que, se alguém confessasse que Jesus era o Cristo, seria expulso da sinagoga." },
    { number: 23, text: "Foi por isso que seus pais disseram: \"Ele já tem idade; perguntem a ele\"." },
    { number: 24, text: "Pela segunda vez, chamaram o homem que fora cego e lhe disseram: \"Para a glória de Deus, diga a verdade. Sabemos que esse homem é pecador\".", isHighlighted: true },
    { number: 25, text: "Ele respondeu: \"Não sei se ele é pecador ou não. Uma coisa sei: eu era cego e agora vejo!\"", isHighlighted: true },
    { number: 26, text: "Então lhe perguntaram: \"O que ele lhe fez? Como lhe abriu os olhos?\"" },
    { number: 27, text: "Ele respondeu: \"Eu já lhes disse, e vocês não me deram ouvidos. Por que querem ouvir outra vez? Querem tornar-se discípulos dele também?\"" },
    { number: 28, text: "Então eles o insultaram e disseram: \"Discípulo dele é você! Nós somos discípulos de Moisés!" },
    { number: 29, text: "Sabemos que Deus falou a Moisés, mas, quanto a esse homem, nem sabemos de onde ele vem\"." },
    { number: 30, text: "O homem respondeu: \"Ora, isso é extraordinário! Vocês não sabem de onde ele vem, contudo ele me abriu os olhos." },
    { number: 31, text: "Sabemos que Deus não ouve pecadores, mas ouve o homem que o teme e pratica a sua vontade." },
    { number: 32, text: "Ninguém jamais ouviu que os olhos de um cego de nascença tivessem sido abertos." },
    { number: 33, text: "Se esse homem não fosse de Deus, não poderia fazer coisa alguma\"." },
    { number: 34, text: "Eles replicaram: \"Você nasceu cheio de pecado e quer nos ensinar?\" E o expulsaram." },
    { number: 35, text: "Jesus ouviu que o haviam expulsado e, ao encontrá-lo, disse: \"Você crê no Filho do homem?\"" },
    { number: 36, text: "Perguntou o homem: \"Quem é ele, Senhor, para que eu nele creia?\"" },
    { number: 37, text: "Disse Jesus: \"Você já o tem visto. É aquele que está falando com você\"." },
    { number: 38, text: "Então o homem disse: \"Senhor, eu creio\". E o adorou." },
    { number: 39, text: "Disse Jesus: \"Eu vim a este mundo para julgamento, a fim de que os cegos vejam e os que veem se tornem cegos\"." },
    { number: 40, text: "Alguns fariseus que estavam com ele ouviram isso e perguntaram: \"Acaso nós também somos cegos?\"" },
    { number: 41, text: "Disse Jesus: \"Se vocês fossem cegos, não seriam culpados de pecado; mas agora que dizem que podem ver, a culpa de vocês permanece\"." }
];

export const SLIDES_CONTENT = [
    {
        id: 'intro',
        type: 'intro',
        title: '4 Verdades que Abriram Olhos',
        subtitle: 'João 9'
    },
    {
        id: 'bible',
        type: 'bible',
        title: 'Leitura Bíblica',
        subtitle: 'João 9'
    },
    {
        id: 'point-1',
        type: 'content',
        title: 'Jesus vê o que ninguém vê',
        content: `Antes de qualquer milagre, Jesus viu o homem cego. Enquanto muitos viam apenas um problema, Ele enxergou um propósito.
        
        O olhar de Jesus restaura identidade antes mesmo de trazer solução.`,
        quote: '“Você consegue lembrar de um momento em que se sentiu visto por Deus, mesmo quando ninguém mais percebia a sua dor?”'
    },
    {
        id: 'point-2',
        type: 'content',
        title: 'Os discípulos procuraram culpa; Jesus procurou propósito',
        content: `Os discípulos queriam saber quem pecou; Jesus revelou para quê servia aquela situação. Ele muda a lente do julgamento para a lente do propósito. 
        
        A graça nos convida a olhar as pessoas com compaixão, não com condenação.`,
        quote: '“Em que área da sua vida você sente que Deus quer te ensinar?”'
    },
    {
        id: 'point-3',
        type: 'content',
        title: 'Milagre pede obediência simples',
        content: `Jesus fez lodo com terra e enviou o cego a se lavar no tanque de Siloé, que significa “enviado”. 
        
        O milagre não começou quando ele enxergou — começou quando ele obedeceu. Passos pequenos liberam coisas grandes.`,
        quote: '“Que passo simples Deus pode estar te pedindo neste tempo — algo que talvez pareça pequeno, mas pode abrir caminho para algo maior?”'
    },
    {
        id: 'point-4',
        type: 'content',
        title: 'Transformação integral',
        content: `Quando o homem voltou, estava irreconhecível. Não apenas os olhos foram abertos, mas também a mente e o coração foram curados.
        
        Jesus não apenas muda circunstâncias — Ele muda pessoas por inteiro.`,
        quote: '“O que em você Jesus tem transformado — e que hoje as pessoas já percebem diferente?”',
        summary: '“Enquanto é dia, coopere com Jesus: dê passos simples e verá a obra de Deus.”'
    },
    {
        id: 'announcements',
        type: 'list',
        title: 'Avisos da Semana',
        items: [
            { icon: 'sword', text: 'Acampamento de Homens – 29 e 30/11 (inscrições com Willian Stingelin)' },
            { icon: 'droplet', text: 'Batismo – 07/12' },
            { icon: 'mask', text: 'Espetáculo de Artes – 13/12 (ingressos à venda com os integrantes da CIA Kyrios)' },
        ]
    }
];