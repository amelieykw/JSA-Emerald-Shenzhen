module.exports = {
  up:
    'CREATE TABLE IF NOT EXISTS loans (id INTEGER NOT NULL auto_increment primary key , userId INTEGER NOT NULL , productId INTEGER NOT NULL , remaining INTEGER NOT NULL);',
  down: 'drop table loans'
}
