block('button').mod('has-loading', true)(

    content()(function() {
        var ctx = this.ctx;

        ctx.icon = {
            block : 'spin',
            mods : { theme : ctx.mods.theme, size : ctx.mods.size },
            mix : { block : 'button', elem : 'loading' }
        };

        return applyNext();
    })
);
