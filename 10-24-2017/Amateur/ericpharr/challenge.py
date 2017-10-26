import unittest
import datetime as dt
import re

def problem_1(birthdate):
    '''Function takes birthdate in format MM/DD/YYYY format and outputs age.'''

    bday_list = birthdate.split('/', 2)

    bday = dt.date(int(bday_list[2]), int(bday_list[0]), int(bday_list[1]))

    now = dt.date.today()

    age = now - bday

    return int(age.days // 365.25)


def problem_2(string):
    '''Takes string input and outputs list of words'''

    result = string.split()

    return result


def problem_3(string, word):
    '''Function which finds number of occurances of a word in a string'''

    word = word.lower()
    string = string.lower()

    result = re.findall(word, string)

    return len(result)


def problem_4(string):
    '''Removes a set of special characters (including spaces) from input string.'''

    result = re.sub('[~!\$%#\^@\- _\?&]', '', string)

    return result


def multiply(a, b):
    '''Function to multiply integers a and b (without using * operator)'''

    if a < 0 and b < 0:
        a = abs(a)
        b = abs(b)
        array = [a for x in range(b)]
    elif b < 0:
        array = [b for x in range(a)]
    else:
        array = [a for x in range(b)]

    result = sum(array)

    return result

def pro_problem_2(string1, string2):
    '''Function to decode coded message'''

    string1 = re.sub('\d', '', string1)
    string2 = re.sub('\d', '', string2)

    combined = list(zip(string1, string2))

    result = ''

    for x, y in combined:
        result += x
        result += y

    return result


class TestChallengeProblems(unittest.TestCase):

    def test_problem_1(self):
        self.assertEqual(34, problem_1('11/04/1982'))

    def test_problem_2(self):
        self.assertEqual(["Trick", "or", "Treat"], problem_2('Trick or Treat'))

    def test_problem_3(self):
        self.assertEqual(2, problem_3('The pumpkin rolled down the hill and under someone\'s car.', 'the'))

    def test_problem_4(self):
        self.assertEqual('HappyHalloween', problem_4('Happy ~!$%#@-_?^& Halloween'))

    def test_problem_5(self):
        self.assertEqual(30, multiply(5, 6))
        self.assertEqual(-15, multiply(1, -15))
        self.assertEqual(14, multiply(-2, -7))

    def pro_problem_2(self):
        self.assertEqual('coding', pro_problem_2('c1dn4', 'orig'))
        self.assertEqual('baked beans', pro_problem_2('bk2bas4', 'ae en'))


if __name__ == '__main__':
    unittest.main()
