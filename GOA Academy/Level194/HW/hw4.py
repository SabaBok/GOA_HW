#4) მოცემულია სამი სეტი: required = {"python", "sql"}, forbidden = {"java"}, candidate = {"python", "java", "git"}. 
# დაადგინე: აკმაყოფილებს თუ არა კანდიდატი მოთხოვნილებებს, რომელი წესები ირღვევა ან თუ ირღვევა საერთოდ.
required = {"python", "sql"}
forbidden = {"java"}
candidate = {"python", "java", "git"}

check_forb = True if forbidden & candidate else False
check_req = True if required <= candidate else False

#print(check_forb)
print(f"Has Forbidden languages -->{check_forb} \nHas required languages --> {check_req}")