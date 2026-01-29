#3) შექმენით ტექსტური ფაილი ამფაილში შეინახეთ სხვადასხვა სახელები, პითონიდან წაიკითხეთ ეს ფაილი საბოლოოდ დააბრუნეთ ტერმინალში შედეგას list 
# სადაც იქნება თითოული სახელი ჩამატებული და გვერძე ექნება მიწერილი goa, გამოიყენეთ list comprehension

with open(r'D:\GOA_HW\GOA Academy\Level200\CW\cw3\Text.txt','w') as f:
    f.write("Ana Nino Beka Giorgi")

with open(r'D:\GOA_HW\GOA Academy\Level200\CW\cw3\Text.txt') as f:
    content = sorted([name + "-goa" for name in f.read().split()])
    print(content)