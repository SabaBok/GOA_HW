#3) მოცემულია ორი სეტი: yesterday = {"Ana", "Nika", "Luka"}, today = {"Nika", "Saba", "Luka"}. იპოვე: ვინ დაემატა დღეს, ვინ დარჩა სიაში და ვინ ამოვარდა სიიდან
yesterday = {"Ana", "Nika", "Luka"}
today = {"Nika", "Saba", "Luka"}

added = today-yesterday
stayed = today & yesterday
removed = yesterday - today

print(f"{added}: Was Added \n{stayed}: Stayed \n{removed} Was Removed")