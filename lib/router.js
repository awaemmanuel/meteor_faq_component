// Configure Router
Router.configure({
    layoutTemplate: 'layout'
});

// Map Router
Router.map(function() {
    // Home Route
    this.route('questions', {
        path: '/',
        template: 'questions'
    })
});