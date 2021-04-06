#!/usr/local/bin/python3.8
from pybraille import convertText
import cgi


#print(convertText("hello"))
# print(convertText("filename.txt")) #eg: tests/sample.txt

print ("Content-Type: text/html\r\n")

if __name__== '__main__':
	#### read from html form
	form = cgi.FieldStorage()
	inpf = form.getvalue('inpf')
	outf = form.getvalue('outf')
	if inpf is None:
		print(convertText(outf))
	if outf is None:
		print(convertText(inpf))	
