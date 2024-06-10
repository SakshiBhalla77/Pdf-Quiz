import json
import os
input_file_path = "/Users/shashankdubey/PDF2Quiz/Frontend/src/response/response.txt"
answer = ""
final_answer = ""
with open(input_file_path, 'r') as file:
    answer = file.read()

for i in range(len(answer)):
    if(not answer[i]=='\\' and not i==0 and not  i==len(answer)-1):
        final_answer+=answer[i]

print(final_answer)

import json

json_file_path = "/Users/shashankdubey/PDF2Quiz/Frontend/src/response/response.json"
with open(json_file_path, 'w') as json_file:
    json.dump(final_answer, json_file)

print(f'String stored in JSON format in {json_file_path}')
