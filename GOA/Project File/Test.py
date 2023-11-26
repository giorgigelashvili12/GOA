# ARAA CHEMI GAKETEBULI DAIMAXSOVRET!!!!
# minda ro kodebi viswavlo

class PythonQuiz:
    def __init__(self, questions):
        self.questions = questions
        self.score = 0

    def run_quiz(self):
        print("Welcome to the Python Quiz!")
        for i, question in enumerate(self.questions, start=1):
            print("Question {i}: {question['question']}")
            self.display_choices(question['choices'])
            user_answer = input("Your answer: ").strip().lower()
            self.check_answer(question['answer'], user_answer)

        print("Quiz completed! Your score: {self.score}/{len(self.questions)}")

    def display_choices(self, choices):
        for letter, choice in zip('ABCD', choices):
            print("{letter}. {choice}")
        print()

    def check_answer(self, correct_answer, user_answer):
        if user_answer == correct_answer.lower():
            print("Correct!")
            self.score += 1
        else:
            print("Wrong! The correct answer is {correct_answer}")


# List of quiz questions
quiz_questions = [
    {
        'question': 'What does "len()" do?',
        'choices': ['Count Numbers', 'Count Elements', 'Count Letters', 'Count Spaces'],
        'answer': 'B'
    },
    {
        'question': 'nums = [1, 2, 5, 2, 4, 3]; print(len(nums)), what will this code output?',
        'choices': ['5', '1', '3', '6'],
        'answer': 'D'
    },
    {
        'question': 'What does "set()" do?',
        'choices': ['Deletes Doubling Numbers/Elements', 'All of these', 'outputs with {}', 'Puts Numbers in order'],
        'answer': 'B'
    },
    {
        'question': 'nums = [1, 2, 5, 2, 4, 3]; print(len(nums)), what will this code output?',
        'choices': ['5', '1', '3', '6'],
        'answer': 'D'
    },
    {
        'question': 'nums = [1, 2, 5, 2, 4, 3]; print(len(nums)), what will this code output?',
        'choices': ['5', '1', '3', '6'],
        'answer': 'D'
    },
    {
        'question': 'nums = [1, 2, 5, 2, 4, 3]; print(len(nums)), what will this code output?',
        'choices': ['5', '1', '3', '6'],
        'answer': 'D'
    }
]

# Create and run the quiz
python_quiz = PythonQuiz(quiz_questions)
python_quiz.run_quiz()
