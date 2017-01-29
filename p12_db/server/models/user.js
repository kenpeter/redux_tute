// It is looking for the bookshelf config
import bookshelf from "../bookshelf";

export default bookshelf.Model.extend({
  tableName: 'users'
});
