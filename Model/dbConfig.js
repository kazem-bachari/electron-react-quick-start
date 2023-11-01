class  AsyncDatabase{

    path=undefined
    constructor(path){
      this.path=path
    }
    dbEngin()
    {
        if(!this._dbEngin)
        {
            let sqlite3 = require('sqlite3').verbose();
            this._dbEngin = new sqlite3.Database(this.path);
        }
        return this._dbEngin;
    }

    
    
    getTestTable( callback)
    {
        var query = `select * from test`
        this.dbEngin().all(query, callback)
    }
}
module.exports=AsyncDatabase