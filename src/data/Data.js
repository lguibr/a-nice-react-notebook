const Data = {
    files : 
    [
        {
        name:"Biografia",
        parent : "1",
        reference : "2",
        theContent : `Um pouco sobre mim e
        sobre minha historia como pessoa.`
        },
        {
        name:"Experiencia Academica",
        parent : "1",
        reference : "2",
        theContent : 'Um pouco sobre minhas experiencias academicas, locais que estudei e afins'
        },
        {
        name:"Experiencia Profissional",
        parent : "1",
        reference : "2",
        theContent : `Um pouco sobre minhas experiencias profissionais locais onde trabalheio, funções que desenvolvi e afins`
        },
        {
        name:"Interesses",
        parent : "1",
        reference : "2",
        theContent : 'Um pouco sobre minahs ferramentas favoritas ,tecnologias que tenho mais afinididades e afins'
        },
    ],
}
//DEV tjhis function should be able to return a string with the exactly value to be rendered.
const madePages = ()=>{
    for (const e of Data.files) {
        e.content = parseCode(e.content)
    }
}

const parseCode = (fakeCode)=>{
    console.log(fakeCode)
}

madePages()

//DEV this function should be able to make a three of objects indentends by parenthood.

export default Data;
