#1)  შექმენით ტექსტური ფაილი ამფაილში შეინახეთ სხვადასხვა სახელები, პითონიდან წაიკითხეთ ეს ფაილი საბოლოოდ შეცვალეთ ეს ფაილი  
# სადაც იქნება თითოული სახელი ჩამატებული და გვერძე ექნება მიწერილი goa

with open('D:\GOA_HW\GOA Academy\Level201\CW\cw1\Text.txt','w') as f:
    f.write("Ana Nino Beka Giorgi")

with open('D:\GOA_HW\GOA Academy\Level201\CW\cw1\Text.txt') as f:
    content = sorted([name + "-goa" for name in f.read().split()])

with open('D:\GOA_HW\GOA Academy\Level201\CW\cw1\Text.txt','w') as f:
    f.write(" ".join(content))
    
with open('D:\GOA_HW\GOA Academy\Level201\CW\cw1\Text.txt') as f:
    print(f.read())