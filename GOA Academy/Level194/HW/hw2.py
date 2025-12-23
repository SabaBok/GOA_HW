#2) მოცემულია სეტი და text ცვლადი: banned = {"bad", "ugly", "stupid"}, text = "This is a bad and ugly example". 
# შეამოწმე: შეიცავს თუ არა ტექსტი აკრძალულ სიტყვებს, დაბეჭდე რომელი აკრძალული სიტყვაა ნაპოვნი

banned = {"bad", "ugly", "stupid"}
text = "This is a bad and ugly example"
found = False

for word in banned:
    if word in text:
        print(f"Found banned word: {word}")
        found = True

if not found:
    print("No banned words found")