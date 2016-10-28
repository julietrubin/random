# This URL leads to a resource with a list of classes.
# Each of these classes has a designated room, and a roster of students.
# Ignoring students younger than 25 years old, what's the average number of students in each class?


import requests

def get_class_count(students): 
	count = 0
	for student in students:
		if student['age'] >= 25:
			count += 1
	return count

url = "http://challenge.broadly.com/"
get_classes_url = requests.get(url).json()['url']
list_of_classes_url = requests.get(get_classes_url).json()['classes']
class_count = []
for class_url in list_of_classes_url:
	response = requests.get(class_url).json()
	students = response['students']
	count = get_class_count(students)
	while response.has_key('next'):
		response = requests.get(response['next']).json()
		students = response['students']
		count += get_class_count(students)
	class_count.append(count)

print sum(class_count)/len(class_count)


