const {Text, Color} = require("scenegraph"); 

function textstyleHandler(selection) { 
    const node = new Text();
    node.text = "This is red text";
    node.styleRange = [{
        length: node.text.length,
        fill: new Color("#FF0000"),
        fontSize: 24
    }];
    selection.insertionParent.addChild(node);
    node.moveInParentCoordinates(20, 50); 

}

module.exports = {
    commands: {
        createRectangle: textstyleHandler
    }
};