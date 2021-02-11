import sqlite3

from flask import Flask, request, jsonify, g
from flask_cors import CORS

import helpers

app = Flask(__name__)
CORS(app)

DATABASE = 'database.db'

def get_db():
    db = getattr(g, '_database', None)
    if db is None:
        db = g._database = sqlite3.connect(DATABASE)
        db.row_factory = sqlite3.Row
    return db

@app.teardown_appcontext
def close_connection(exception):
    db = getattr(g, '_database', None)
    if db is not None:
        db.close()

@app.route('/food', methods=['GET'])
def get_food():
    filter_ = request.args.get('filter', None)
    cursor = get_db().cursor()

    if not filter_:
        cursor.execute('SELECT * FROM foods ORDER BY name ASC')
        foods = cursor.fetchall()
        return jsonify(helpers.format_foods(foods))
    else:
        if filter_ not in ('fat', 'carbohydrate', 'protein'):
            return 'Invalid filter value', 400
        cursor.execute(f'SELECT * FROM foods ORDER BY {filter_} DESC')
        foods = cursor.fetchall()
        return jsonify(helpers.format_foods(foods))


app.run(debug=True, port=3001, host='0.0.0.0')