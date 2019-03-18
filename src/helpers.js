function choice(items) {
    let randomIdx = (Math.ceil(0,1) * items.length)
    
    return items[randomIdx];
}

function remove(items, item){
    let itemIdx = items.indexOf(item);
    items.splice(itemIdx,1);
    return items;
}



export {choice, remove};