module.exports = app => {
    app.routes('/users')
        .post(app.api.user.save)
        .get(app.api.user.get)


    app.routes('/users/:id')
        .put(app.api.user.save)
        .get(app.api.user.getById)
}