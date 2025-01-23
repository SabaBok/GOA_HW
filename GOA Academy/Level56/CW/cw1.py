#1) https://www.codewars.com/kata/514a024011ea4fb54200004b/train/python
def domain_name(url):
    link = url.split("//")[-1]
    link = link.split("www.")[-1]
    domain = link.split(".")[0]
    return domain