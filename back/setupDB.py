
import os
import sqlite3

def read_file_content(file_name):
    formated_file = []
    with open(file_name) as file:
        for index, line in enumerate(file):
            if index == 0 or index == 1:
                continue
            key_point = line.find('100')
            food_name = line[:key_point].strip()
            numbers_values = line[key_point: ]
            numbers_values = numbers_values.split()
            formated_element = {
                'name': food_name,
                'amount': numbers_values[0],
                'protein': numbers_values[1],
                'carbohydrate': numbers_values[2],
                'fat': numbers_values[3]
            }
            formated_file.append(formated_element)

    return formated_file

food_contens = []
for i in range(1, 10):
    food_contens += read_file_content(os.path.join('.', 'storage', 'alimentos', f'arquivo_0{i}.txt'))

with sqlite3.connect('database.db') as connection:
    cursor = connection.cursor()

    cursor.execute(f'''
        CREATE TABLE foods (name text, amount int, protein int, carbohydrate int, fat int)
    ''')
    for food in food_contens:
        cursor.execute(f"""INSERT INTO foods VALUES
            ('{food["name"]}', {food['amount']}, {food['protein']}, {food['carbohydrate']}, {food['fat']})""")

    connection.commit()

print('Finish load data')
