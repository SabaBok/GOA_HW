#გვაქვს ერთი ტექსტური ფაილი, სადაც წერია რენდომ ტექსტი და ჩვენი მიზანია გავაკეთოთ კლასი რომელსაც ექნება თავისი მეთოდები, ეს კლასი მიიღებს ინფორმაციას ამ 
# ტექსტური ფაილიდან და დააბრუნებს ინფორმაციას თუ რამდენი ხმოვანი ასოა მიღებული ფაილის ტექსტში. ასევე ყველამ დაასრულეთ საკლასო დავალება ბოლომდე

class VowelCounter:
    def __init__(self, file_path, text):
        self.file_path = file_path
        self.text = text

        try:
            with open(self.file_path, 'r', encoding='utf-8') as file:
                self.text = file.read()
        except FileNotFoundError:
            with open(self.file_path, 'w', encoding='utf-8') as file:
                file.write(self.text)

    def count_vowels(self):
        vowels = 'aeiouAEIOU'
        count = 0

        for char in self.text:
            if char in vowels:
                count += 1

        return count


file_path = r'D:\GOA_HW\GOA Academy\Level205\HW\text.txt'
text = "This is some default text written into the file."

vowel_counter = VowelCounter(file_path, text)
vowel_count = vowel_counter.count_vowels()

print(f"The number of vowels in the file is: {vowel_count}")