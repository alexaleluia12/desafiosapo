def format_foods(foods):
    formated_foods = []
    for food in foods:
        formated_foods.append(
            {
                'name': food['name'],
                'amount': food['amount'],
                'protein': food['protein'],
                'carbohydrate': food['carbohydrate'],
                'fat': food['fat'],
            }
        )

    return formated_foods
