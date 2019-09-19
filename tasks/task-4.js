let functionality = {
    isActive: false,
    addListeners: function() {
        document.querySelectorAll('a').forEach(item => {
            item.addEventListener('click', event => {
                this.clickListener(event);
            });
        });
    },

    clickListener: function(event) {
        event.preventDefault();
        this.isActive = !this.isActive;
        this.checkTriggered();
    },

    checkTriggered: function() {
        console.log(this.isActive);
        console.log('Done');
    },
};

functionality.addListeners();