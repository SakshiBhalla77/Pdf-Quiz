import json
import os
import subprocess

Fail_count = 0
current_dir = os.path.dirname(os.path.abspath(__file__))
run_llm_path = os.path.join(current_dir, 'runLLm.py')
project_root = os.path.abspath(os.path.join(current_dir, '..'))
print(project_root)
input_file_path = os.path.join(project_root, 'Frontend', 'src', 'response', 'response.txt')
output_file_path = os.path.join(project_root, 'Frontend', 'src', 'response', 'formattedQuestions.json')

with open(input_file_path, 'r') as file:
    data = file.read()

cleaned_data = data.replace('\\', '').replace('\n', '')
if cleaned_data.startswith('"') and cleaned_data.endswith('"'):
    cleaned_data = cleaned_data[1:-1]

print(cleaned_data)

try:
    formatted_json = json.loads(cleaned_data)
except json.JSONDecodeError as e:
    if(Fail_count<3):
        print("Error at parsing" + e)
        subprocess.run(['python3', run_llm_path])
    else:
        print("Error at parsing, display error page "+ e)
        exit(1)

with open(output_file_path, 'w') as file:
    json.dump(formatted_json, file, indent=2)

print("Formatted JSON has been saved to formattedQuestions.json")
os.remove(input_file_path)
