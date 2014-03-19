var nodes  = document.querySelectorAll('[data-ipsum]');

Array.prototype.forEach.call(nodes, function (node) {
    var text = "";

    for(var i = node.dataset.ipsum; i > 0; i--) {
        if(Math.random() > 0.8)
            text+= " ";
        else
            text += "▄";
    }

    node.textContent = text;
});
