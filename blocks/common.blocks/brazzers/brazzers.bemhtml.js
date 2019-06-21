block('brazzers')(
    def()(function() {
        return applyNext({ _brazzers : this.ctx });
    }),
    content()(function () {
        var brazzers = this._brazzers;

        const iterateItems = function(content) {
            var i = 0, image, contents = [];

            while(image = content[i++]) {
                contents.push(createElImage(image));
            }

            return contents;
        };

        const createElImage = function(src) {
            return {
                elem : 'page',
                content : [
                    {
                        elem : 'container',
                        content : {
                            elem : 'image',
                            attrs : { style : 'background-image: url('+ src +')' }
                        }
                    },
                    {
                        elem : 'button'
                    }
                ]
            };
        };

        brazzers.content = {
            elem : 'wrapper',
            content : iterateItems(brazzers.images || [])
        };

        return applyNext();
    })
);
