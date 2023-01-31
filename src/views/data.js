function customer () {
    return new Promise((resolve)  => {
        setTimeout(() => {
            resolve([
                { name: "armia" , id: 2 },
                { name: "habib", id: 3}
            ])
        }, 200);
    })
}
function sources() {
    return ["customers", "sites", "phones"]
}
function DataSource() {
    this.row = function () {
        return sources()
    }()
}
export default {
    customer,
    DataSource
}