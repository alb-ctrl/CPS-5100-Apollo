#!/usr/local/bin/python3.8
from pybraille import convertText
import cgi


#print(convertText("hello"))
# print(convertText("filename.txt")) #eg: tests/sample.txt

print ("Content-Type: text/html\r\n")
print ("<p> hello</p>")
if __name__== '__main__':
	#### read from html form
	form = cgi.FieldStorage()
	inpf = form.getvalue('inpf')
	print(convertText(inpf))	
