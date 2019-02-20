
ko.bindingHandlers.dump = {
    init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
        var context = valueAccessor();
        var allBindings = allBindings();
        var pre = document.createElement('pre');

        element.appendChild(pre);

        var dumpJSON = ko.computed({
            read: function () {
                return ko.toJSON(context, null, 2);
            },
            disposeWhenNodeIsRemoved: element
        });

        ko.applyBindingsToNode(pre,
            { text: dumpJSON }
        );
    }
}