#გვაქვს ერთი ტექსტური ფაილი, რომელშიც არის რაიმე დიდი ზომის ტექსტი, ჩვენი მიზანია გავაკეთოთ კლასი, რომელსაც ექნება თავისი მეთოდები და დაითვლის თუ რამდენი 
#კითხვითი და რამდენი თხრობითი წინადადებაა ჩვენს ტექსტურ ფაილში

class TextAnalyzer:
	def __init__(self, file_path,text):
		self.file_path = file_path
		self.text = text
		
	def count_sentences(self):
		with open(self.file_path, 'r', encoding='utf-8') as file:
			text = file.read()
			question_sentences = text.count('?')
			statement_sentences = text.count('.')
			return question_sentences, statement_sentences

file_path = 'D:/GOA_HW/GOA Academy/Level207/HW/text.txt'
analyzer = TextAnalyzer(file_path,'i just want to. do you understand?')
question_count, statement_count = analyzer.count_sentences()
print(f"Number of question sentences ---> {question_count}")
print(f"Number of statement sentences ---> {statement_count}")
