block('button')(

    content()(
        function() {
            var ctx = this.ctx,
                content = [];

            // NOTE: wasn't moved to separate template for optimization
            /* jshint eqnull: true */

            if( this.isSimple(ctx.text) && ctx.text != null ) {
                ctx.text = { elem : 'text', content : ctx.text };
            }

            ctx.text != null && content.push(ctx.text);

            if( ctx.icon && ctx.icon.position === 'left' ) {
                content.unshift(ctx.icon);
            } else {
                content.push(ctx.icon);
            }

            return [ { elem : 'content', content : content, tag : 'span'  } ];
        },
        match(function() { return typeof this.ctx.content !== 'undefined'; })(function() {
            return this.ctx.content;
        })
    )
);
