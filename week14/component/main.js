
function create(Cls, attributes, ...children) {
    let o;
    if(typeof Cls === "string") {
        o = new Wrapper(cls)
    } else {
        o = new Cls({
            timer: {}
        });
    }

    for(let name in attributes) {
        // o[name] = attributes[name]
        o.setAttribute(name, attributes[name])
    }
    for(let child of children) {
        o.appendChild(child)
        // o.children.push(child)
    }
    return o;
}

class Div {
    constructor(config) {
        console.log("config", config)
        this.children = [],
        this.root = document.createElement("div");
    }
    // set Cls(v) {
    //     console.log("Parent::class", v)
    // }
    setAttribute(name, value) {
        console.log(name, value)
    }
    
    appendChild(child) {
        // this.children.appendChild(child)
        this.slot.appendChild(child)
        
    }
    render() {
        this.slot = <div></div>
        return <artical>
            <header>header</header>
            {this.slot}
            <footer>footer</footer>
        </artical>
    }
    mountTo(parent) {
        this.render().mountTo(parent)
        // parent.appendChild(this.root)
        for(let child of this.children) {
            // if(typeof child === "string") {
            //     child = new Text(child)
            // }
            child.mountTo(this.slot)
        }
    }
}
class Text {
    constructor(text) {
        this.children = []
    }
}
class Wrapper {
    constructor(type) {

        this.children = [],
        this.root = document.createElement(type);
    }
    // set Cls(v) {
    //     console.log("Parent::class", v)
    // }
    setAttribute(name, value) {
        console.log(name, value)
    }
    
    appendChild(child) {
        this.children.appendChild(child)
        
    }
    mountTo(parent) {
        parent.appendChild(this.root)
        for(let child of this.children) {
            
            child.mountTo(this.root)
        }
    }
}
let component = <Div id="a" cls="b" >
    <Div></Div>
    <Div></Div>
    <Div></Div>
    </Div>

component.mountTo(document.body)
// component.id = "b"
// component.setAttribute("id", "a");