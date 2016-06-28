function Demo() {
    var iframes;
    var el = document.createElement('div');
    
    var urls = [
        'https://en.wikipedia.org/wiki/Mozilla',
        'https://en.wikipedia.org/wiki/Servo_(layout_engine)',
        'https://en.wikipedia.org/wiki/Rust_(programming_language)',
        'https://en.wikipedia.org/wiki/Compiler'
    ];

    _.times(50, function() {
        urls.push('https://en.wikipedia.org/wiki/Special:Random');
    });

    iframes = urls.map((url) => {
        return new DemoIFrame(url);
    });

    var dummyIFrame = new DemoIFrame();
    var selected = dummyIFrame; // Dummy IFrame

    iframes.forEach((iframe) => {
        el.appendChild(iframe.el);
    });

    window.addEventListener('keydown', onNumberKeyPress(_.partial(setSelected)));

    var curr = 1;
  /*  setInterval(function() {
       setSelected(curr);
       curr = (curr % urls.length) + 1;
    }, 150);*/
    function setSelected(n) {
        if (iframes[n - 1] === selected) { 
            // Collapse if already elected
            // selected.collapse().start();
            // selected = dummyIFrame;
            return;
        }

        var collapse = selected.collapse().start();
        selected = iframes[n - 1];
        var expand = selected.expand().start()

    }

    this.animate = function(t) {
        TWEEN.update(t);
        
        // Animate all IFrames
        iframes.forEach((iframe) => {iframe.animate(t);});
        // Animate container
        // el.style.transform = 'rotateX(' + props.rotY + 'deg)';
   /*     var t_ = t * 0.0025;
        var radius = 100;
        var num = iframes.length;
        var alpha = 0;
        var angIncrease = Math.PI * 2 / num;
        iframes.forEach(function(iframe) {
            var beta = t_ + alpha;
            var x = Math.round(radius * Math.sin(beta));
            var y = Math.round(radius * Math.cos(beta));
            //applyTranslate(iframe, x, y);
            
            alpha += angIncrease;
        });*/

        
    };

    this.dom = el;
}
