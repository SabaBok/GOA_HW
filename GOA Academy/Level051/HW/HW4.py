#4)https://www.codewars.com/kata/554ca54ffa7d91b236000023
def delete_nth(order, max_e):

    new_list = []
    for i in order:
        if new_list.count(i) >= max_e:
            continue
        else:
            new_list.append(i)
    return new_list