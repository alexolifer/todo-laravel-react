#Routes

+--------+----------+---------------------+------+------------------------------------------------------------+------------------------------------------+
| Domain | Method   | URI                 | Name | Action                                                     | Middleware                               |
+--------+----------+---------------------+------+------------------------------------------------------------+------------------------------------------+
|        | GET|HEAD | api/items           |      | App\Http\Controllers\ItemController@index                  | api                                      |
|        | POST     | api/item/store      |      | App\Http\Controllers\ItemController@store                  | api                                      |
|        | PUT      | api/item/{id}       |      | App\Http\Controllers\ItemController@update                 | api                                      |
|        | DELETE   | api/item/{id}       |      | App\Http\Controllers\ItemController@destroy                | api                                      |
+--------+----------+---------------------+------+------------------------------------------------------------+------------------------------------------+
