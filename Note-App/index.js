let notes = [
    {
        id: new Date(),
        title: "Sample Note",
        body: "This is a description for our sample note",
        bgColor:"pink"
    }
]
    const createElement = ( tag , classes = []) =>{
        const element = document.createElement(tag);
        classes.forEach(cl => {
            element.classList.add(cl)
        })
        return element;

    }

