#5)https://www.codewars.com/kata/5a26ca51e1ce0e987b0000ee
def branch(n):
    if n == 1:
        return 0
    
    layer = 0
    max_num_in_layer = 1
    
    while max_num_in_layer < n:
        layer += 1
        max_num_in_layer = (2 * layer + 1) ** 2
    
    min_num_in_layer = (2 * (layer - 1) + 1) ** 2 + 1
    side_length = 2 * layer
    
    for i in range(4):
        branch_start = min_num_in_layer + i * side_length
        branch_end = branch_start + side_length - 1
        if branch_start <= n <= branch_end:
            return i
    
    return 0
