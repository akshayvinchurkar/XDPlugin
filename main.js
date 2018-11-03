const {Text, Color} = require("scenegraph"); 

function createStyledTextHandlerFunction(selection) {
    const node = new Text();                    // [1]
    node.text = "This is some red text";        // [2]
    node.styleRange = [{                        // [3]
        length: node.text.length,
        fill: new Color("#FF0000"),
        fontSize: 24
    }];

    selection.insertionParent.addChild(node);   // [4]
    node.moveInParentCoordinates(20, 50);       // [5]
}

module.exports = {
    commands: {
        "createStyledTextCommand": createStyledTextHandlerFunction
    }
};