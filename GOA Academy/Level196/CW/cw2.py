def cakes(recipe, available):
    amount_per_ingredient = []
    for ingredient in recipe:
        if ingredient not in available or available[ingredient] < recipe[ingredient]:
            return 0
        else:
            amount_per_ingredient.append(available[ingredient] / recipe[ingredient])
    return min(amount_per_ingredient)

#https://www.codewars.com/kata/525c65e51bf619685c000059