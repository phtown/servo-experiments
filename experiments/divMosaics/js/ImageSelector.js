// ImageSelector component - displays multiple images for selection.
function ImageSelector(imageURLs) {
    var el = document.createElement('div');
    el.className = 'imageSelector';
    var images = imageURLs
        .map((url) => {
            var img = new Image();
            img.src = url;
            img.addEventListener('click', () => {
                el.dispatchEvent(new CustomEvent('imageSelected', {detail: {
                    image: img
                }}));
            });
            return img;
        });
    images.forEach(el.appendChild.bind(el)); 

    // var pa = new PerspectiveAnimatable(el, 150);
    this.el = el;
   
    var active = true;
    this.toggle = () => {
        active = !active;
        el.style.visibility = active ? 'visible' : 'hidden';
    };
    this.images = images;
    this.addEventListener = el.addEventListener.bind(el);
}