const PORT = process.env.PORT || 6000


const connection = {
    connectionString : 'postgres://postgres:omina27@localhost:5432/proart',
    connectionStringEl : 'postgres://akulzzlf:6ZsXJebZ5N6VOwy8ixRqpi8QrL91tfYe@rosie.db.elephantsql.com/akulzzlf'
}

module.exports = {
    PORT,
    connection
}