createStringConnection("db_products", "Leandro", "9876")

function createStringConnection(databaseName, user, pass){
    console.log(`connect:DBCONNECT;user=${user};pass=${pass};initial_database=${databaseName}`)
}