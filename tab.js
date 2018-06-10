
function Tab (node){
    this.$node = $(node)
    this.init()
}

Tab.prototype = {
    constructor: Tab,
    init: function(){
        this.$node.css({
            "background-color": "blue",
            'width':"100px",
            "height": "100px",
            "display": "inline-flex",
            "align-items": "center",
            "justify-content": "center"
        })
        this.bind()
    },
    bind: function(){
        var $node = this.$node
        $node.click(function () {
            $node.css('background-color',randomColor())
        })
        function randomColor() {
            var color = "#"
            for (var i=0;i<6;i++  ){

                color += Math.floor( Math.random() *10 )
            }
            return color
        }

    }

}

