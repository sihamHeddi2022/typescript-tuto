// intersection


type Draggable= {
    resize:()=>{ }
}


type Clickable = {
    click:()=>{}
}


type Widget = Draggable & Clickable

// union type
let w:Widget | undefined;

w?.click()




// literal type


type Quantity = 5 | 12


let potato:Quantity = 12











