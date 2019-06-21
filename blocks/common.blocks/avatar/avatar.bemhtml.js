block('avatar')(
    def()(function() {
        return applyNext({ _avatar : this.ctx });
    }),
    addAttrs()(function() {
        var avatar = this._avatar,
            attrs = avatar.attrs || {};

        if( avatar.image ) {
            attrs.style = 'background-image: url('+ avatar.image +')';
        }

        return attrs;
    })
);
