    /**
     * Dematerializes the explicit notification values of an observable sequence as implicit notifications.
     * @returns {Observable} An observable sequence exhibiting the behavior corresponding to the source sequence's notification values.
     */
    observableProto.dematerialize = function () {
        var source = this;
        return new AnonymousObservable(function (observer) {
            return source.subscribe(function (x) {
                return x.accept(observer);
            }, observer.onError.bind(observer), observer.onCompleted.bind(observer));
        });
    };
