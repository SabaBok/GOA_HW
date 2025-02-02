#4)https://www.codewars.com/kata/583710f6b468c07ba1000017
def proofread(st):
    def fix_ei_word(word):
        ei_words = {"hteir": "their", "caffiene": "caffeine", "decieve": "deceive", "wieght": "weight", "recieve": "receive"}
        return ei_words.get(word, word)
    
    st = st.lower()
    sentences = st.split(". ")
    fixed_sentences = []
    
    for sentence in sentences:
        words = sentence.split()
        corrected_words = []
        
        for word in words:
            corrected_word = word.replace("ie", "ei")
            corrected_word = fix_ei_word(corrected_word)
            corrected_words.append(corrected_word)
        
        corrected_sentence = " ".join(corrected_words)
        fixed_sentences.append(corrected_sentence.capitalize())
    
    return ". ".join(fixed_sentences)